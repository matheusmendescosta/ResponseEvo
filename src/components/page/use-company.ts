'use client';

import { companyDTO } from '@/dto/companyDTO';
import { useCallback, useEffect, useState } from 'react';

type CompanyProps = {
  id: string;
};

export const useCompanies = ({ id }: CompanyProps) => {
  const [company, setCompany] = useState<companyDTO>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadCompany = useCallback(() => {
    setIsLoading(true);
    setError(null);

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/company/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Fetch fail');
        }
        return response.json();
      })
      .then((data: companyDTO) => {
        setCompany(data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  useEffect(() => {
    loadCompany();
  }, [loadCompany]);

  return { company, setCompany, isLoading, error };
};
