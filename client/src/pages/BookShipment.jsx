export default function BookShipment() {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center bg-maroon-700 text-white dark:bg-gray-900 p-8">
        <h1 className="text-4xl font-bold mb-6">Book a Shipment</h1>
        <form className="bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-100 rounded-lg shadow-md p-6 w-full max-w-md">
          <label className="block mb-4">
            <span className="block mb-2 font-semibold">Pickup Location</span>
            <input
              type="text"
              className="w-full px-3 py-2 rounded border border-gray-300 dark:bg-gray-700 dark:border-gray-600"
              placeholder="Enter pickup location"
            />
          </label>
          <label className="block mb-4">
            <span className="block mb-2 font-semibold">Drop-off Location</span>
            <input
              type="text"
              className="w-full px-3 py-2 rounded border border-gray-300 dark:bg-gray-700 dark:border-gray-600"
              placeholder="Enter drop-off location"
            />
          </label>
          <button
            type="submit"
            className="w-full bg-maroon-700 hover:bg-maroon-800 text-white py-2 rounded font-semibold transition"
          >
            Submit
          </button>
        </form>
      </section>
    );
  }
  