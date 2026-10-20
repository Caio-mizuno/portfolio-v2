import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-12 border-t border-white/10">
      <div className="container mx-auto py-8 flex flex-col md:flex-row gap-4 justify-between items-center text-sm text-white/40">
        <p>
          © {new Date().getFullYear()} Caio Mizuno ·{" "}
          <span className="text-white/60">Mizuno</span>
          <span className="text-accent">.Tech</span>
        </p>
        <nav className="flex gap-6">
          <Link href="/contact" className="hover:text-accent transition-all">
            Contato
          </Link>
          <Link href="/legal" className="hover:text-accent transition-all">
            Termos e Privacidade
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
