import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";


// Import pages
import EventSection from "./Components/EventSection";
import PartiesSec from "./Components/PartiesSec";
import MeetupSec from "./Components/MeetupSec";
import SeminarSec from "./Components/SeminarSec";
import About from "./Components/About";
import Contact from "./Components/Contect";

// Layout wrapper to include Header & Footer
const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page with Home.jsx */}
        <Route path="/" element={<Layout><EventSection /></Layout>} />
        
        {/* Other pages */}
        
        <Route path="/parties" element={<Layout><PartiesSec /></Layout>} />
        <Route path="/meetups" element={<Layout><MeetupSec /></Layout>} />
        <Route path="/seminars" element={<Layout><SeminarSec /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
