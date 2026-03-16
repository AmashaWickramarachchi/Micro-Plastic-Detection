import { Microscope } from "lucide-react";

const Footer = () => (
  <footer className="border-t bg-card">
    <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <div className="flex items-center gap-2">
        <Microscope className="h-4 w-4 text-primary" />
        <span className="font-display font-semibold text-foreground">
          ML-Based Microplastic Detection
        </span>
      </div>
      <p>University of Sri Jayewardenepura · Faculty of Technology · {new Date().getFullYear()}</p>
    </div>
  </footer>
);

export default Footer;
