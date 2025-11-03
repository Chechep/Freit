import React, { useState } from "react";
import { Search, PackageCheck, Truck } from "lucide-react";

export default function TrackShipment() {
  const [trackingId, setTrackingId] = useState("");
  const [shipment, setShipment] = useState(null);

  const handleTrack = (e) => {
    e.preventDefault();

    // Mock tracking logic (you can later fetch from backend)
    const mockData = {
      id: trackingId,
      status: "In Transit",
      location: "Nairobi Hub",
      expectedDelivery: "2025-11-07",
    };
    setShipment(mockData);
  };

  return (
    <section className="min-h-screen bg-gray-900 text-white p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-maroon-700">
        Track Your Shipment
      </h1>

      <form
        onSubmit={handleTrack}
        className="flex items-center gap-3 bg-gray-800 p-4 rounded-xl shadow-lg w-full max-w-md"
      >
        <Search className="text-maroon-700" />
        <input
          type="text"
          placeholder="Enter Tracking ID"
          value={trackingId}
          onChange={(e) => setTrackingId(e.target.value)}
          className="flex-1 bg-transparent outline-none text-white placeholder-gray-400"
        />
        <button
          type="submit"
          className="bg-maroon-700 px-4 py-2 rounded-lg hover:bg-maroon-800 transition"
        >
          Track
        </button>
      </form>

      {shipment && (
        <div className="bg-gray-800 mt-8 p-6 rounded-2xl shadow-xl w-full max-w-md text-center">
          <PackageCheck className="mx-auto mb-3 text-maroon-700" size={40} />
          <h2 className="text-xl font-semibold mb-2">
            Tracking ID: {shipment.id}
          </h2>
          <p className="text-gray-300">Status: {shipment.status}</p>
          <p className="text-gray-300">Location: {shipment.location}</p>
          <p className="text-gray-300">
            Expected Delivery: {shipment.expectedDelivery}
          </p>
          <div className="mt-4 flex justify-center">
            <Truck className="text-maroon-700 animate-bounce" size={32} />
          </div>
        </div>
      )}
    </section>
  );
}
