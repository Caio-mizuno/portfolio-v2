import LegalDocument from "@/components/Pages/LegalDocument";

export const metadata = {
  title: "Termos e Privacidade | Mizuno.Tech",
  description:
    "Termos de Serviço e Política de Privacidade dos aplicativos Mizuno.Tech (PT-BR / EN).",
};

export default function LegalPage({ searchParams }) {
  const initialLang = searchParams?.lang === "en" ? "en" : "pt";
  return <LegalDocument initialLang={initialLang} />;
}
