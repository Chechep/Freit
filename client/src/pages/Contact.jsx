import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="min-h-screen text-black dark:text-white dark:bg-black flex flex-col items-center py-20 px-6">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg text-gray-700 dark:text-gray-400 mb-10 max-w-2xl text-center">
        Have questions or need freight assistance? Get in touch with our team and we’ll be happy to help.
      </p>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl w-full">
        {/* Contact Info */}
        <div className="bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100 rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Our Details</h2>
          <div className="flex items-center gap-3 mb-3">
            <Phone className="h-6 w-6 text-maroon-700 dark:text-maroon-500" />
            <span>+254 712 345 678</span>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <Mail className="h-6 w-6 text-maroon-700 dark:text-maroon-500" />
            <span>support@freitlogistics.com</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="h-6 w-6 text-maroon-700 dark:text-maroon-500" />
            <span>Industrial Area, Nairobi, Kenya</span>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100 rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Send a Message</h2>

          <label className="block mb-4">
            <span className="block mb-2 font-medium">Full Name</span>
            <input
              type="text"
              className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700"
              placeholder="Your name"
            />
          </label>

          <label className="block mb-4">
            <span className="block mb-2 font-medium">Email Address</span>
            <input
              type="email"
              className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700"
              placeholder="you@example.com"
            />
          </label>

          <label className="block mb-4">
            <span className="block mb-2 font-medium">Message</span>
            <textarea
              rows="4"
              className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700"
              placeholder="Type your message..."
            ></textarea>
          </label>

          <button
            type="submit"
            className="w-full bg-maroon-700 hover:bg-maroon-800 text-white py-2 rounded font-semibold transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
