import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="border-t border-border py-10 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Hi Craft Engineering" className="h-10 w-auto" />
          <span className="text-muted-foreground font-body text-sm">
            © {new Date().getFullYear()} Hi Craft Engineering. All rights reserved.
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://instagram.com/hi_craft_engineering"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors font-body text-sm"
          >
            Instagram
          </a>
          <a href="tel:0706156337" className="text-muted-foreground hover:text-primary transition-colors font-body text-sm">
            0706 156 337
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
