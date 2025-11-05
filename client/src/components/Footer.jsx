import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-maroon-700 dark:bg-black text-white py-10 px-6 transition-none">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-10">

        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Freit Logistics</h2>
          <p className="text-gray-200 mb-4">
            Reliable logistics and freight forwarding services across Kenya and beyond.
            We deliver efficiency, safety, and speed.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300"><Facebook className="h-5 w-5" /></a>
            <a href="#" className="hover:text-gray-300"><Instagram className="h-5 w-5" /></a>
            <a href="#" className="hover:text-gray-300"><Linkedin className="h-5 w-5" /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-200">
            <li><Link to="/" className="hover:text-gray-100">Home</Link></li>
            <li><Link to="/about" className="hover:text-gray-100">About Us</Link></li>
            <li><Link to="/services" className="hover:text-gray-100">Services</Link></li>
            <li><Link to="/fleet" className="hover:text-gray-100">Fleet</Link></li>
            <li><Link to="/contact" className="hover:text-gray-100">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-gray-200">
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-gray-300" /> +254 712 345 678
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-gray-300" /> support@freitlogistics.com
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-gray-300" /> Industrial Area, Nairobi, Kenya
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-10 pt-4 text-center text-gray-300 text-sm">
        © {new Date().getFullYear()} Freit Logistics. All rights reserved.
      </div>
    </footer>
  );
}
