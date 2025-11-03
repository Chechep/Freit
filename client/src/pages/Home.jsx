import { Truck, Globe, Package } from "lucide-react";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <h1 className="text-3xl md:text-5xl font-bold text-maroon-700 dark:text-maroon-400 mb-6">
        Seamless Logistics & Freight Solutions
      </h1>

      <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300 mb-8">
        Delivering efficiency and reliability in every shipment — by air, sea, or road.
      </p>

      <div className="flex flex-wrap justify-center gap-8">
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
      </div>
    </section>
  );
}

function Card({ icon, title, desc }) {
  return (
    <div className="w-64 p-5 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition-transform duration-300 hover:-translate-y-1">
      <div className="text-maroon-700 dark:text-maroon-400 mb-3">{icon}</div>
      <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm">{desc}</p>
    </div>
  );
}
