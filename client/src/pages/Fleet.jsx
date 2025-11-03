import { Truck, Ship, Plane, Car } from "lucide-react";

export default function Fleet() {
  const fleetData = [
    {
      id: 1,
      name: "Freightliner Truck",
      type: "Truck",
      capacity: "30 Tons",
      status: "Available",
      icon: <Truck className="h-10 w-10 text-maroon-700 dark:text-maroon-400" />,
    },
    {
      id: 2,
      name: "Cargo Ship",
      type: "Ship",
      capacity: "5000 Tons",
      status: "On Route",
      icon: <Ship className="h-10 w-10 text-maroon-700 dark:text-maroon-400" />,
    },
    {
      id: 3,
      name: "Cargo Plane",
      type: "Plane",
      capacity: "100 Tons",
      status: "Under Maintenance",
      icon: <Plane className="h-10 w-10 text-maroon-700 dark:text-maroon-400" />,
    },
    {
      id: 4,
      name: "Delivery Van",
      type: "Van",
      capacity: "3 Tons",
      status: "Available",
      icon: <Car className="h-10 w-10 text-maroon-700 dark:text-maroon-400" />,
    },
  ];

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-16 px-6">
      <h1 className="text-4xl font-bold text-center text-maroon-700 dark:text-maroon-400 mb-8">
        Our Fleet
      </h1>

      <p className="text-center max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-12">
        We operate a diverse and reliable fleet to handle shipments of all sizes and distances.
        From local deliveries to international freight, our vehicles ensure your goods arrive safely and on time.
      </p>

      {/* Fleet Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {fleetData.map((vehicle) => (
          <div
            key={vehicle.id}
            className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg transition"
          >
            {vehicle.icon}
            <h2 className="text-xl font-semibold mt-4 mb-2">{vehicle.name}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Type: {vehicle.type}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Capacity: {vehicle.capacity}</p>
            <span
              className={`px-3 py-1 text-sm font-medium rounded ${
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
        ))}
      </div>
    </section>
  );
}
