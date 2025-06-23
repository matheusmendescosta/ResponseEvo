import FormSection from './FormSection';

type FormPageProps = {
  companyId: string;
};

const FormPage = ({ companyId }: FormPageProps) => {
  return <FormSection id={companyId} />;
};

export default FormPage;
