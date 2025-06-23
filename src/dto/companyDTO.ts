export type companies = {
  id: string;
  name: string;
  cnpj: string;
  createdAt: string;
};

export type companiesDTO = {
  limit: number;
  page: number;
  companies: companies[];
};

export type companyDTO = {
  id: string;
  name: string;
  cnpj: string;
  createdAt: string;
};
