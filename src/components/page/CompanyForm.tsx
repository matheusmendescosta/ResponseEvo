import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useNewCompany } from './use-company';

export function CompanyForm() {
  const { register, handleSubmit } = useNewCompany();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent>
        <form onSubmit={handleSubmit} >
          <SheetHeader>
            <SheetTitle>Cadastrar nova empresa</SheetTitle>
            <SheetDescription>
              Cadastre uma nova empresa para criar formularios e gerenciar
            </SheetDescription>
          </SheetHeader>
          <div className="grid flex-1 auto-rows-min gap-6 px-6">
            <div className="grid gap-1">
              <Label htmlFor="sheet-demo-name">Nome</Label>
              <Input
                id="sheet-demo-name"
                defaultValue="Tio Giba"
                {...register('name')}
              />
            </div>
            <div className="grid gap-1">
              <Label htmlFor="sheet-demo-username">CNPJ</Label>
              <Input
                id="sheet-demo-username"
                defaultValue="12.345.678/0001-90"
                {...register('cnpj')}
              />
            </div>
          </div>
          <SheetFooter className="pt-2">
            <SheetClose asChild>
              <Button type="submit">Salvar alterações</Button>
            </SheetClose>
            <SheetClose asChild>
              <Button variant="outline">Fechar</Button>
            </SheetClose>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
}
