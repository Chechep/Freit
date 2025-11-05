export default function Hero() {
    return (
      <section
        className="min-h-screen flex flex-col items-center justify-center text-center relative w-full"
        style={{
          backgroundImage: "url('DAF.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>
  
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-300 mb-6">
            Seamless Logistics & Freight Solutions
          </h1>
          <p className="max-w-2xl mx-auto text-gray-300 dark:text-gray-400 mb-8 text-lg">
            Delivering efficiency and reliability in every shipment by air, sea, or road.
          </p>
          <a
            href="/contact"
            className="inline-block bg-maroon-700 hover:bg-maroon-400 dark:bg-gray-700 dark:hover:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition"
          >
            Inquire
          </a>
        </div>
      </section>
    );
  }
  