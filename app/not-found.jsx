import Link from "next/link";
import { Button } from "@/components/Ui/button";

export const metadata = {
  title: "Página não encontrada | Mizuno.Tech",
};

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center">
      <div className="container mx-auto flex flex-col items-center xl:items-start gap-6 text-center xl:text-left">
        <span className="text-[120px] xl:text-[180px] leading-none font-extrabold text-transparent text-outline">
          404
        </span>
        <h2 className="h2">Página não encontrada</h2>
        <p className="max-w-[500px] text-white/60">
          O endereço que você abriu não existe ou mudou de lugar. Volte para o
          início ou veja meus projetos.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/">
            <Button variant="outline" size="lg">
              Voltar ao início
            </Button>
          </Link>
          <Link href="/work">
            <Button variant="primary" size="lg">
              Ver projetos
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
