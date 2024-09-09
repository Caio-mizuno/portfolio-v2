import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Pages/Header";
import PageTransition from "@/components/Pages/PageTransition";
import StairTransition from "@/components/Pages/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weght: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Mizuno.Tech",
  description: "Portifolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" charSet="utf-8" className={jetbrainsMono.variable}>
      <body>
        <div >
          <Header />
          <StairTransition />
          <PageTransition>{children}</PageTransition>
        </div>
      </body>
    </html>
  );
}
