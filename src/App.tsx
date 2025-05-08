import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Page/Home"; // Import the Home component
import Footer from "./Components/Footer"; // Import the Footer component
import "../src/index.css"; // Import global CSS
import ChatAI from "./Page/ChatAI";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chatai" element={<ChatAI />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
