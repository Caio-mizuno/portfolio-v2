import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Pages/Header";
import PageTransition from "@/components/Pages/PageTransition";
import StairTransition from "@/components/Pages/StairTransition";
import Footer from "@/components/Pages/Footer";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

const description =
  "Portfólio de Caio Mizuno: Squad Leader e Software Engineer (PHP, Node e desenvolvimento assistido por IA).";

export const metadata = {
  metadataBase: new URL("https://mizunotech.com.br"),
  title: "Mizuno.Tech | Caio Mizuno",
  description,
  openGraph: {
    title: "Caio Mizuno | Squad Leader e Software Engineer",
    description,
    url: "/",
    siteName: "Mizuno.Tech",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/assets/photo.png", alt: "Caio Mizuno" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={jetbrainsMono.variable}>
      <body>
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-accent focus:text-primary focus:px-4 focus:py-2 focus:rounded-md"
        >
          Pular para o conteúdo
        </a>
        <div>
          <Header />
          <StairTransition />
          <main id="conteudo">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
