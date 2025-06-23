import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useCompanies } from './use-companies';
import Link from 'next/link';

export function CompanyList() {
  const { companies, isLoading, error } = useCompanies();

  return (
    <Table>
      <TableCaption>Lista de empresas cadastradas</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Empresa</TableHead>
          <TableHead>CNPJ</TableHead>
          <TableHead className="text-left">Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {companies &&
          companies.companies.map((company) => (
            <TableRow key={company.id}>
              <TableCell>{company.name}</TableCell>
              <TableCell>{company.cnpj}</TableCell>
              <TableCell className="text-left">
                <Link href={`/dashboard/company/${company.id}/form`}>
                  Criar formulário
                </Link>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}
