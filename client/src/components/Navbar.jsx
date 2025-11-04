import { Link } from "react-router-dom";
import {
  Package,
  Truck,
  BarChart3,
  Phone,
  Home as HomeIcon,
  Menu,
  X,
  Mail,
  Globe2,
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";
import "../index.css"; // Make sure the CSS animation is imported

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50">
      {/* 🔔 Continuous Scrolling Top Bar (Left → Right) */}
      <div className="bg-maroon-800 dark:bg-maroon-900 text-gray-200 py-1 overflow-hidden relative border-b border-maroon-700 dark:border-maroon-950">
        <div className="flex whitespace-nowrap animate-marquee-left hover:[animation-play-state:paused]">
          <div className="flex items-center gap-10 px-6">
            <span className="text-gray-800 dark:text-gray-200 flex items-center gap-2">
              <strong className="text-gray-800 dark:text-gray-200">
                Trusted by 500+ businesses worldwide
              </strong>{" "}
              experience seamless logistics with <strong>Freit</strong> today! 🌍
            </span>

            <span className="text-gray-800 dark:text-gray-200 flex items-center gap-2">
              <span>
                Contact us at <strong>support@freit.com</strong> for instant
                assistance.
              </span>
              <Mail size={16} className="text-maroon-400" />
            </span>

            <span className="text-gray-800 dark:text-gray-200 flex items-center gap-2">
              <span>
                Call <strong>+254 790 086 093</strong> available 24/7 for
                tracking & help.
              </span>
              <Phone size={16} className="text-maroon-400" />
            </span>

            <span className="text-gray-800 dark:text-gray-200 flex items-center gap-2">
              <span>
                <strong>Freit</strong> Delivering efficiency & reliability by
                air, sea and land.
              </span>
              <Truck size={16} className="text-maroon-400" />
            </span>
          </div>

          {/* Duplicate for continuous scroll */}
          <div className="text-gray-800 dark:text-gray-200 flex items-center gap-10 px-6">
            <span className="text-gray-800 dark:text-gray-200 flex items-center gap-2">
              <strong className="text-gray-800 dark:text-gray-200">
                Trusted by 500+ businesses worldwide
              </strong>{" "}
              experience seamless logistics with <strong>Freit</strong> today! 🌍
            </span>

            <span className="text-gray-800 dark:text-gray-200 flex items-center gap-2">
              <span>
                Contact us at <strong>support@freit.com</strong> for instant
                assistance.
              </span>
              <Mail size={16} className="text-maroon-400" />
            </span>

            <span className="text-gray-800 dark:text-gray-200 flex items-center gap-2">
              <span>
                Call <strong>+254 790 086 093</strong> available 24/7 for
                tracking & help.
              </span>
              <Phone size={16} className="text-maroon-400" />
            </span>

            <span className="text-gray-800 dark:text-gray-200 flex items-center gap-2">
              <span>
                <strong>Freit</strong> Delivering efficiency & reliability by
                air, sea and land.
              </span>
              <Truck size={16} className="text-maroon-400" />
            </span>
          </div>
        </div>
      </div>

      {/* 🌍 Main Navbar */}
      <nav className="bg-maroon-700 dark:bg-maroon-800 text-white shadow-md transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 font-bold text-xl hover:opacity-90 transition"
            onClick={() => setOpen(false)}
          >
            <Truck size={24} /> Freit
          </Link>

          <div className="hidden md:flex gap-6">
            <NavLink to="/" icon={<HomeIcon size={18} />} text="Home" />
            <NavLink to="/book" icon={<Package size={18} />} text="Book" />
            <NavLink to="/track" icon={<BarChart3 size={18} />} text="Track" />
            <NavLink to="/fleet" icon={<Truck size={18} />} text="Fleet" />
            <NavLink to="/contact" icon={<Phone size={18} />} text="Contact" />
          </div>

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

        {open && (
          <div className="md:hidden bg-maroon-800 dark:bg-maroon-900 flex flex-col items-start px-6 py-4 space-y-3 border-t border-white/10 transition-all duration-300">
            <NavLink to="/" text="Home" onClick={() => setOpen(false)} />
            <NavLink to="/book" text="Book" onClick={() => setOpen(false)} />
            <NavLink to="/track" text="Track" onClick={() => setOpen(false)} />
            <NavLink to="/fleet" text="Fleet" onClick={() => setOpen(false)} />
            <NavLink to="/contact" text="Contact" onClick={() => setOpen(false)} />
          </div>
        )}
      </nav>
    </header>
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
