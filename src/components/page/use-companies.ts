'use client';

import { companiesDTO } from '@/dto/companyDTO';
import { useCallback, useEffect, useState } from 'react';

export const useCompanies = () => {
  const [companies, setCompanies] = useState<companiesDTO>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadCompanies = useCallback(() => {
    setIsLoading(true);
    setError(null);

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/companies`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Fetch fail');
        }
        return response.json();
      })
      .then((data: companiesDTO) => {
        setCompanies(data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    loadCompanies();
  }, [loadCompanies]);

  return { companies, setCompanies, isLoading, error };
};
