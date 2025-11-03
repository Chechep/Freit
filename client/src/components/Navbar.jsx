import { Link } from "react-router-dom";
import {
  Package,
  Truck,
  BarChart3,
  Phone,
  Home as HomeIcon,
  Menu,
  X,
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 bg-maroon-700 dark:bg-black text-white shadow-lg z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 font-bold text-xl hover:opacity-90 transition"
          onClick={() => setOpen(false)}
        >
          <Truck size={24} />
          FreightFlow
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          <NavLink to="/" icon={<HomeIcon size={18} />} text="Home" />
          <NavLink to="/book" icon={<Package size={18} />} text="Book" />
          <NavLink to="/track" icon={<BarChart3 size={18} />} text="Track" />
          <NavLink to="/fleet" icon={<Truck size={18} />} text="Fleet" />
          <NavLink to="/dashboard" icon={<BarChart3 size={18} />} text="Dashboard" />
          <NavLink to="/contact" icon={<Phone size={18} />} text="Contact" />
        </div>

        {/* Theme Toggle & Mobile Button */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden focus:outline-none"
            aria-label="Toggle Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-maroon-800 dark:bg-maroon-900 flex flex-col items-start px-6 py-4 space-y-3 border-t border-white/10 transition-all duration-300">
          <NavLink to="/" text="Home" onClick={() => setOpen(false)} />
          <NavLink to="/book" text="Book" onClick={() => setOpen(false)} />
          <NavLink to="/track" text="Track" onClick={() => setOpen(false)} />
          <NavLink to="/fleet" text="Fleet" onClick={() => setOpen(false)} />
          <NavLink to="/dashboard" text="Dashboard" onClick={() => setOpen(false)} />
          <NavLink to="/contact" text="Contact" onClick={() => setOpen(false)} />
        </div>
      )}
    </nav>
  );
}

function NavLink({ to, text, icon, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="flex items-center gap-2 hover:text-gray-200 dark:hover:text-gray-300 transition"
    >
      {icon && icon}
      <span>{text}</span>
    </Link>
  );
}
