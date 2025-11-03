import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ChatbotPanel from "./components/ChatbotPanel";
import Home from "./pages/Home";
import BookShipment from "./pages/BookShipment";
import TrackShipment from "./pages/TrackShipment";
import Fleet from "./pages/Fleet";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100 transition-colors">
      <Router>
        <Navbar />
        <main className="pt-20 pb-10 px-4 md:px-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book" element={<BookShipment />} />
            <Route path="/track" element={<TrackShipment />} />
            <Route path="/fleet" element={<Fleet />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <ChatbotPanel />
      </Router>
    </div>
  );
}

export default App;
