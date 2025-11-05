import {
    Truck,
    Globe,
    Package,
    Ship,
    Plane,
    Clock,
    ShieldCheck,
    Headset,
    DollarSign,
    MapPin,
  } from "lucide-react";
  
  export default function Services() {
    const locations = [
      { country: "Kenya", towns: ["Nairobi", "Mombasa", "Nakuru", "Eldoret", "Kisumu"] },
      { country: "Uganda", towns: ["Kampala", "Entebbe", "Jinja", "Gulu"] },
      { country: "Tanzania", towns: ["Dar es Salaam", "Arusha", "Dodoma", "Mwanza"] },
      { country: "Rwanda", towns: ["Kigali", "Huye", "Musanze"] },
      { country: "Burundi", towns: ["Bujumbura", "Gitega"] },
      { country: "DR Congo", towns: ["Kinshasa", "Lubumbashi", "Goma"] },
    ];
  
    return (
      <section className="py-16 bg-white dark:bg-black transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-maroon-700 dark:text-maroon-400 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive logistics solutions tailored to your business needs.
            </p>
          </div>
  
          {/* Service Cards */}
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            <Card icon={<Truck size={40} />} title="Road Freight" desc="Fast and reliable trucking services across regions." />
            <Card icon={<Globe size={40} />} title="Global Shipping" desc="International freight and customs handling made easy." />
            <Card icon={<Package size={40} />} title="Warehousing" desc="Safe, scalable, and efficient storage for your goods." />
            <Card icon={<Ship size={40} />} title="Sea Freight" desc="Comprehensive port-to-port and door-to-door sea cargo services." />
            <Card icon={<Plane size={40} />} title="Air Freight" desc="Express air delivery for high-value and time-sensitive shipments." />
            <Card icon={<Clock size={40} />} title="Express Delivery" desc="Fast-track delivery for urgent shipments with guaranteed timelines." />
          </div>
  
          {/* Why Choose Us */}
          <div className="bg-white dark:bg-black py-16 text-black dark:text-white text-center mb-16 rounded-2xl shadow-[0_0_25px_-5px_rgba(128,0,0,0.5)]">
            <h2 className="text-3xl font-bold mb-10 text-maroon-700 dark:text-maroon-400">Why Choose Freit?</h2>
            <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <WhyCard icon={<ShieldCheck size={36} />} title="Trusted & Secure" desc="Your cargo is handled with care and tracked end-to-end." />
              <WhyCard icon={<DollarSign size={36} />} title="Affordable Pricing" desc="Transparent and competitive rates — no hidden fees." />
              <WhyCard icon={<Globe size={36} />} title="Regional Expertise" desc="Deep network coverage across East and Central Africa ensures reliability." />
              <WhyCard icon={<Headset size={36} />} title="24/7 Customer Support" desc="Our dedicated team is always available to assist you anytime, anywhere." />
            </div>
          </div>
  
          {/* Shipping Locations */}
          <div className="text-left bg-white dark:bg-black p-8 rounded-xl shadow-[0_0_25px_-5px_rgba(128,0,0,0.5)]">
            <h2 className="text-2xl font-bold text-maroon-700 dark:text-maroon-400 mb-6 text-center">
              Shipping Locations — East & Central Africa
            </h2>
  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {locations.map((loc) => (
                <LocationCard key={loc.country} country={loc.country} towns={loc.towns} />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  function Card({ icon, title, desc }) {
    return (
      <div className="w-64 p-5 bg-white dark:bg-black rounded-2xl shadow-[0_0_20px_-5px_rgba(128,0,0,0.4)] hover:shadow-[0_0_25px_-5px_rgba(128,0,0,0.6)] transition-transform duration-300 hover:-translate-y-1">
        <div className="text-maroon-700 dark:text-maroon-400 mb-3">{icon}</div>
        <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">{desc}</p>
      </div>
    );
  }
  
  function WhyCard({ icon, title, desc }) {
    return (
      <div className="p-6 bg-white dark:bg-black rounded-2xl shadow-[0_0_20px_-5px_rgba(128,0,0,0.4)] hover:shadow-[0_0_25px_-5px_rgba(128,0,0,0.6)] transition duration-300">
        <div className="flex flex-col items-center mb-3 text-maroon-700 dark:text-maroon-400">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300 text-sm">{desc}</p>
      </div>
    );
  }
  
  function LocationCard({ country, towns }) {
    return (
      <div className="p-5 bg-white dark:bg-black rounded-xl shadow-[0_0_20px_-5px_rgba(128,0,0,0.4)] hover:shadow-[0_0_25px_-5px_rgba(128,0,0,0.6)] transition duration-300">
        <h3 className="text-xl font-bold text-maroon-700 dark:text-maroon-400 flex items-center gap-2 mb-2">
          <MapPin size={18} /> {country}
        </h3>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm">
          {towns.map((town) => (
            <li key={town}>{town}</li>
          ))}
        </ul>
      </div>
    );
  }
  