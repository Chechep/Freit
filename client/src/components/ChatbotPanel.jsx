import { useState } from "react";
import { Send, MessageCircle } from "lucide-react";

export default function ChatbotPanel() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ sender: "bot", text: "Hi 👋, I'm FreightBot! How can I assist you?" }]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: "user", text: input }]);
    setInput("");
    // Mock response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Thanks! I'll get back to you shortly 🚚" },
      ]);
    }, 800);
  };

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 bg-maroon-700 text-white p-3 rounded-full shadow-lg hover:bg-maroon-800 transition"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {open && (
        <div className="fixed bottom-6 right-6 bg-white dark:bg-gray-800 border rounded-2xl shadow-lg w-80">
          <div className="p-3 bg-maroon-700 text-white font-semibold rounded-t-2xl flex justify-between">
            <span>FreightBot</span>
            <button onClick={() => setOpen(false)}>✖</button>
          </div>
          <div className="h-64 overflow-y-auto p-3">
            {messages.map((msg, i) => (
              <div key={i} className={`my-1 ${msg.sender === "user" ? "text-right" : "text-left"}`}>
                <span
                  className={`inline-block px-3 py-1 rounded-lg ${
                    msg.sender === "user"
                      ? "bg-maroon-700 text-white"
                      : "bg-gray-200 dark:bg-gray-700 dark:text-gray-200"
                  }`}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <div className="flex border-t dark:border-gray-700">
            <input
              className="flex-grow px-2 py-2 outline-none dark:bg-gray-800"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
            />
            <button
              onClick={handleSend}
              className="bg-maroon-700 text-white px-3 rounded-r-2xl hover:bg-maroon-800 transition"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
