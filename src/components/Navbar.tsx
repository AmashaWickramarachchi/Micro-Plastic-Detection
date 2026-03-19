import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Microscope } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/background", label: "Research Background" },
  { to: "/objectives", label: "Objectives" },
  { to: "/methodology", label: "Methodology" },
  { to: "/results", label: "Results" },
  { to: "/impact", label: "Impact" },
  { to: "/team", label: "Team" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="navbar-modern sticky top-0 z-50">
      <style>{`
        .navbar-modern {
          background-color: #091a2a;
          box-shadow: 0 0 20px #207c86;
        }
        
        .navbar-modern .nav-link {
          color: white;
          position: relative;
          display: inline-block;
          padding: 8px 0;
          transition: all 0.3s ease;
        }
        
        .navbar-modern .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #00ccff, #0099ff);
          transition: width 0.3s ease;
        }
        
        .navbar-modern .nav-link:hover {
          text-shadow: 0 0 10px rgba(0, 204, 255, 0.8), 0 0 20px rgba(0, 153, 255, 0.6);
          letter-spacing: 0.5px;
        }
        
        .navbar-modern .nav-link:hover::after {
          width: 100%;
        }
        
        .navbar-modern .nav-link.active {
          text-shadow: 0 0 15px rgba(0, 204, 255, 1), 0 0 30px rgba(0, 153, 255, 0.8);
        }
        
        .navbar-modern .nav-link.active::after {
          width: 100%;
        }
        
        .navbar-modern .logo-icon {
          transition: all 0.3s ease;
          filter: drop-shadow(0 0 5px rgba(0, 204, 255, 0.3));
        }
        
      
        .navbar-modern .mobile-toggle {
          color: white;
          transition: all 0.3s ease;
        }
        
        .navbar-modern .mobile-toggle:hover {
          text-shadow: 0 0 10px rgba(0, 204, 255, 0.8);
          filter: drop-shadow(0 0 10px rgba(0, 204, 255, 0.6));
        }
        
        .navbar-modern .mobile-menu {
          background-color: #091a2a;
          box-shadow: inset 0 5px 20px #207c86);
        }
        
        .navbar-modern .mobile-link {
          color: white;
          transition: all 0.3s ease;
          padding-left: 1.5rem;
          border-left: 3px solid transparent;
        }
        
        .navbar-modern .mobile-link:hover {
          border-left-color: #00ccff;
          text-shadow: 0 0 10px rgba(0, 204, 255, 0.8);
          padding-left: 2rem;
        }
        
        .navbar-modern .mobile-link.active {
          border-left-color: #00ccff;
          text-shadow: 0 0 15px rgba(0, 204, 255, 1);
        }
      `}</style>
      
      <div className="container mx-auto px-2">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="logo flex items-center gap-2 font-display font-bold text-white">
            <Microscope className="logo-icon h-10 w-10" />
            <span className="hidden sm:inline text-lg">MP Detection</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`nav-link text-base font-medium ${
                  location.pathname === l.to ? "active" : ""
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-toggle lg:hidden p-2 rounded-md"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="mobile-menu lg:hidden border-t border-blue-400/30 pb-4 rounded-b-lg">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`mobile-link block py-2.5 text-sm font-medium transition-all ${
                  location.pathname === l.to ? "active" : ""
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
