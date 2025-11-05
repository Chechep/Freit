import Hero from "./Hero";
import Services from "./Services";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-hidden bg-white dark:bg-black">
      <Hero />
      <Services />
      <Footer />
    </div>
  );
}
