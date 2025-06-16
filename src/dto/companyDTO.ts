export type companies = {
  id: string;
  name: string;
  cnpj: string;
  createdAt: string;
};

export type companyDTO = {
  limit: number;
  page: number;
  companies: companies[];
};
