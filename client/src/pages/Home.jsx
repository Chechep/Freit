import { Truck, Globe, Package, Ship, Plane, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <section
  className="min-h-screen flex flex-col items-center justify-center text-center relative w-screen"
  style={{
    backgroundImage: "url('DAF.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat"
  }}
>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>
        
        <div className="relative z-10  p-10 rounded-2xl shadow-lg max-w-4xl mx-4">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-300 dark:text-gray-300 mb-6">
            Seamless Logistics & Freight Solutions
          </h1>

          <p className="max-w-2xl mx-auto text-gray-300 dark:text-gray-400 mb-8 text-lg">
            Delivering efficiency and reliability in every shipment by air, sea or road.
          </p>

          {/* Book Now Button */}
            <a
                href="/contact"
                className="inline-block bg-maroon-700 hover:bg-maroon-400 dark:bg-gray-700 dark:hover:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition"
            >
                Inquire
            </a>
        </div>
      </section>

      {/* Rest of the content without background image */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4">
          {/* Services Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-maroon-700 dark:text-maroon-400 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive logistics solutions tailored to your business needs
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mb-16">
            <Card
              icon={<Truck size={40} />}
              title="Road Freight"
              desc="Fast and reliable trucking services across regions."
            />
            <Card
              icon={<Globe size={40} />}
              title="Global Shipping"
              desc="International freight and customs handling made easy."
            />
            <Card
              icon={<Package size={40} />}
              title="Warehousing"
              desc="Safe, scalable, and efficient storage for your goods."
            />
            <Card
              icon={<Ship size={40} />}
              title="Sea Freight"
              desc="Comprehensive port-to-port and door-to-door sea cargo services."
            />
            <Card
              icon={<Plane size={40} />}
              title="Air Freight"
              desc="Express air delivery for high-value and time-sensitive shipments."
            />
          </div>

          {/* Shipping Locations */}
          <div className="text-left bg-white dark:bg-gray-800 p-8 rounded-xl shadow-inner">
            <h2 className="text-2xl font-bold text-maroon-700 dark:text-maroon-400 mb-6 text-center">
              Shipping Locations — East & Central Africa
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <LocationCard
                country="Kenya"
                towns={["Nairobi", "Mombasa", "Nakuru", "Eldoret", "Kisumu"]}
              />
              <LocationCard
                country="Uganda"
                towns={["Kampala", "Entebbe", "Jinja", "Gulu"]}
              />
              <LocationCard
                country="Tanzania"
                towns={["Dar es Salaam", "Arusha", "Dodoma", "Mwanza"]}
              />
              <LocationCard
                country="Rwanda"
                towns={["Kigali", "Huye", "Musanze"]}
              />
              <LocationCard
                country="Burundi"
                towns={["Bujumbura", "Gitega"]}
              />
              <LocationCard
                country="DR Congo"
                towns={["Kinshasa", "Lubumbashi", "Goma"]}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Card({ icon, title, desc }) {
  return (
    <div className="w-64 p-5 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition-transform duration-300 hover:-translate-y-1">
      <div className="text-maroon-700 dark:text-maroon-400 mb-3">{icon}</div>
      <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm">{desc}</p>
    </div>
  );
}

function LocationCard({ country, towns }) {
  return (
    <div className="p-5 bg-white dark:bg-gray-900 rounded-xl shadow hover:shadow-lg transition duration-300">
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