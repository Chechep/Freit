import { Truck, Ship, Plane, Car, Droplet, Mountain, Trees } from "lucide-react";
import { motion } from "framer-motion";

// 🖼️ Import your images (put them in src/assets/fleet/)
import truckImg from "../assets/fleet/truck.jpg";
import tankerImg from "../assets/fleet/tanker.jpg";
import logsImg from "../assets/fleet/logs.jpg";
import tipperImg from "../assets/fleet/tipper.jpg";
import shipImg from "../assets/fleet/ship.jpg";
import planeImg from "../assets/fleet/plane.jpg";
import vanImg from "../assets/fleet/van.jpg";
import carTransporterImg from "../assets/fleet/cartransporter.jpg"; // 🆕 new image

export default function Fleet() {
  const fleetData = [
    {
      id: 1,
      name: "Heavy-Duty Freight Truck",
      type: "Truck – General Cargo & Containers",
      capacity: "30 Tons",
      status: "Available",
      icon: <Truck className="h-12 w-12 text-maroon-700 dark:text-maroon-400" />,
      cargo: "Ideal for bulk goods, packaged materials, and containerized freight.",
      image: truckImg,
    },
    {
      id: 2,
      name: "Liquid & Gas Tankers",
      type: "Tank Truck",
      capacity: "40,000 Liters",
      status: "On Route",
      icon: <Droplet className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
      cargo: "Carries petroleum, gas, and industrial liquids safely across regions.",
      image: tankerImg,
    },
    {
      id: 3,
      name: "Timber Haul Truck",
      type: "Log Carrier",
      capacity: "25 Tons",
      status: "Available",
      icon: <Trees className="h-12 w-12 text-green-600 dark:text-green-400" />,
      cargo: "Specialized for logs, timber, and forestry materials transport.",
      image: logsImg,
    },
    {
      id: 4,
      name: "Tipper Truck",
      type: "Sand & Rock Carrier",
      capacity: "20 Tons",
      status: "Available",
      icon: <Mountain className="h-12 w-12 text-yellow-600 dark:text-yellow-400" />,
      cargo: "Used for sand, ballast, gravel, and construction site materials.",
      image: tipperImg,
    },
    {
      id: 5,
      name: "Car Transporter Truck",
      type: "Vehicle Carrier",
      capacity: "8 Cars",
      status: "Available",
      icon: <Car className="h-12 w-12 text-rose-600 dark:text-rose-400" />,
      cargo: "Designed for safe, multi-level transport of cars, SUVs, and vans.",
      image: carTransporterImg,
    },
    {
      id: 6,
      name: "Cargo Ship",
      type: "Marine Freight",
      capacity: "5000 Tons",
      status: "On Route",
      icon: <Ship className="h-12 w-12 text-indigo-600 dark:text-indigo-400" />,
      cargo: "Handles heavy and bulk sea freight across major ports.",
      image: shipImg,
    },
    {
      id: 7,
      name: "Air Cargo Plane",
      type: "Aircraft",
      capacity: "100 Tons",
      status: "Under Maintenance",
      icon: <Plane className="h-12 w-12 text-gray-500 dark:text-gray-300" />,
      cargo: "Ideal for express delivery and fragile international shipments.",
      image: planeImg,
    },
    {
      id: 8,
      name: "Urban Delivery Van",
      type: "Van",
      capacity: "3 Tons",
      status: "Available",
      icon: <Car className="h-12 w-12 text-orange-500 dark:text-orange-400" />,
      cargo: "Perfect for city deliveries and light parcel logistics.",
      image: vanImg,
    },
  ];

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-black text-gray-800 dark:text-gray-100 py-20 px-6">
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-maroon-700 dark:text-maroon-400 mb-4">
          Our Fleet
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Our diverse fleet powers efficient and reliable transport — from local deliveries
          to international cargo shipments. We carry everything from containers to
          construction materials, logs, and vehicles.
        </p>
      </motion.div>

      {/* Fleet Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {fleetData.map((vehicle, i) => (
          <motion.div
            key={vehicle.id}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            {/* Image */}
            <div className="relative w-full h-48 overflow-hidden">
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-white/80 dark:bg-black/60 px-3 py-1 rounded-md text-sm font-medium">
                {vehicle.type}
              </div>
            </div>

            {/* Info */}
            <div className="p-6 flex flex-col items-center text-center">
              {vehicle.icon}
              <h2 className="text-xl font-semibold mt-4 mb-2">{vehicle.name}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Capacity: {vehicle.capacity}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{vehicle.cargo}</p>
              <span
                className={`px-3 py-1 text-sm font-medium rounded-full ${
                  vehicle.status === "Available"
                    ? "bg-green-100 text-green-700 dark:bg-green-700 dark:text-green-100"
                    : vehicle.status === "On Route"
                    ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-700 dark:text-yellow-100"
                    : "bg-red-100 text-red-700 dark:bg-red-700 dark:text-red-100"
                }`}
              >
                {vehicle.status}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
