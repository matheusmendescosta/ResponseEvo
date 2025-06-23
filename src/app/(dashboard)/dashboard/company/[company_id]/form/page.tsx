import FormPage from '@/components/page/form/FormPage';

const Page = async ({
  params,
}: {
  params: Promise<{ company_id: string }>;
}) => {
  return <FormPage companyId={(await params).company_id} />;
};

export default Page;
