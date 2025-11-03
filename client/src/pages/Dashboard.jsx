import { Package, Truck, Clock, BarChart3 } from "lucide-react";

export default function Dashboard() {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-10 px-6">
      <h1 className="text-4xl font-bold text-maroon-700 dark:text-maroon-400 mb-6 text-center">
        Dashboard Overview
      </h1>

      {/* Stats Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-5 flex items-center gap-4">
          <Truck className="h-10 w-10 text-maroon-700 dark:text-maroon-400" />
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Active Shipments</p>
            <p className="text-2xl font-bold">124</p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-5 flex items-center gap-4">
          <Package className="h-10 w-10 text-maroon-700 dark:text-maroon-400" />
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Delivered Packages</p>
            <p className="text-2xl font-bold">532</p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-5 flex items-center gap-4">
          <Clock className="h-10 w-10 text-maroon-700 dark:text-maroon-400" />
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Pending Deliveries</p>
            <p className="text-2xl font-bold">28</p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-5 flex items-center gap-4">
          <BarChart3 className="h-10 w-10 text-maroon-700 dark:text-maroon-400" />
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Performance</p>
            <p className="text-2xl font-bold">92%</p>
          </div>
        </div>
      </div>

      {/* Recent Shipments Table */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Recent Shipments</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                <th className="py-3 px-4">Shipment ID</th>
                <th className="py-3 px-4">Destination</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Date</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: "FRT-001", destination: "Nairobi", status: "In Transit", date: "Nov 1, 2025" },
                { id: "FRT-002", destination: "Mombasa", status: "Delivered", date: "Oct 29, 2025" },
                { id: "FRT-003", destination: "Kisumu", status: "Pending", date: "Oct 30, 2025" },
                { id: "FRT-004", destination: "Nakuru", status: "Delivered", date: "Oct 28, 2025" },
              ].map((shipment) => (
                <tr
                  key={shipment.id}
                  className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                >
                  <td className="py-3 px-4">{shipment.id}</td>
                  <td className="py-3 px-4">{shipment.destination}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 rounded text-sm font-medium ${
                        shipment.status === "Delivered"
                          ? "bg-green-100 text-green-700 dark:bg-green-700 dark:text-green-100"
                          : shipment.status === "In Transit"
                          ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-700 dark:text-yellow-100"
                          : "bg-red-100 text-red-700 dark:bg-red-700 dark:text-red-100"
                      }`}
                    >
                      {shipment.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">{shipment.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
