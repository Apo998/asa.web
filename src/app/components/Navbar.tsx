import React from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";

import asaLogo from "../../assets/ASA Leer.png";

export function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Helper function to determine if a link is active
  const isActive = (path: string) => {
    // Exact match for home, or starts with path for others
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  // Base and active classes for the nav links
  const baseClasses = "text-sm font-medium transition-colors ";
  const inactiveClasses = "text-white/70 hover:text-white";
  const activeClasses =
    "text-white font-medium relative px-4 py-1.5 rounded-full z-0 before:absolute before:inset-0 before:-z-10 before:p-[1.5px] before:rounded-full before:bg-gradient-to-r before:from-[#c2a200] before:to-blue-500 before:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[mask-composite:exclude] before:[-webkit-mask-composite:xor]";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#052747]/35 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-white font-medium text-2xl tracking-tight">
          <img src={asaLogo} alt="ASA Logo" className="h-14 md:h-20 w-auto object-contain" />
        </Link>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-lg border border-white/15 bg-white/5 text-white"
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6 px-8 py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-xl shadow-black/20">
          <Link
            to="/"
            className={`${baseClasses} ${isActive("/") ? activeClasses : inactiveClasses}`}
          >
            Features
          </Link>
          <Link
            to="/insights"
            className={`${baseClasses} ${isActive("/insights") ? activeClasses : inactiveClasses}`}
          >
            Insights
          </Link>
          <Link
            to="/about"
            className={`${baseClasses} ${isActive("/about") ? activeClasses : inactiveClasses}`}
          >
            About
          </Link>

          <Link
            to="/contact"
            className={`${baseClasses} ${isActive("/contact") ? activeClasses : inactiveClasses}`}
          >
            Contact
          </Link>
        </div>

        {/* CTA Button */}
        <Link to="/contact" className="hidden md:flex bg-gradient-to-r from-[#c2a200] to-blue-600 text-white px-6 py-2.5 rounded-full font-medium text-sm hover:opacity-90 transition-opacity">
          Free Consultation Now
        </Link>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-white/5 backdrop-blur-xl">
          <div className="px-4 py-4 flex flex-col gap-3">
            <Link
              to="/"
              className={`rounded-xl px-4 py-3 text-sm ${isActive("/") ? "bg-white/10 text-white" : "text-white/80"}`}
            >
              Features
            </Link>
            <Link
              to="/insights"
              className={`rounded-xl px-4 py-3 text-sm ${isActive("/insights") ? "bg-white/10 text-white" : "text-white/80"}`}
            >
              Insights
            </Link>
            <Link
              to="/about"
              className={`rounded-xl px-4 py-3 text-sm ${isActive("/about") ? "bg-white/10 text-white" : "text-white/80"}`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`rounded-xl px-4 py-3 text-sm ${isActive("/contact") ? "bg-white/10 text-white" : "text-white/80"}`}
            >
              Contact
            </Link>
            <Link
              to="/contact"
              className="mt-1 text-center bg-gradient-to-r from-[#c2a200] to-blue-600 text-white px-5 py-3 rounded-xl font-medium text-sm"
            >
              Free Consultation Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
