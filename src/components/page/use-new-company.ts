import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

type FormProps = {
  name: string;
  cnpj: string;
};

export const useNewCompany = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>();

  const handlerSubmitTag = (data: FormProps) => {
    setIsSubmitting(true);

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/company`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        cnpj: data.cnpj,
      }),
    })
      .then((response) => {
        if (response.ok) {
          router.push('/dashboard/company');
        } else {
          setIsSubmitting(false);
        }
        response.json();
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return {
    isSubmitting,
    register,
    handleSubmit: handleSubmit(handlerSubmitTag),
    errors,
  };
};
