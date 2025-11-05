import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ChatbotPanel from "./components/ChatbotPanel";
import Home from "./pages/Home";
import Fleet from "./pages/Fleet";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Hero from "./pages/Hero";

function App() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100 transition-colors">
      <Router>
        <Navbar />
        <main className="pt-20 pb-10 px-4 md:px-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fleet" element={<Fleet />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/hero" element={<Hero />} />
          </Routes>
        </main>
        <Footer />
        <ChatbotPanel />
      </Router>
    </div>
  );
}

export default App;
