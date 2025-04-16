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
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import EventPlan from "./Components/EventPlan";
import EventDetail from "./Components/EventDetail";
import BookingPage from "./Components/BookingPage";
import ClientProfile from "./Components/ClientProfile";
import Sidebar from "./Components/AdminDashboard/Sidebar";
import Dashboard from "./Components/AdminDashboard/Dashboard";
import AddEvent from "./Components/AdminDashboard/AddEvent";
import UpdateEvent from "./Components/AdminDashboard/UpdateEvent";
import DeleteEvent from "./Components/AdminDashboard/DeleteEvent";
import ViewBookings from "./Components/AdminDashboard/ViewBookings";
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
        <Route path="/login" element={<Layout><Login /></Layout>} />
        <Route path="/signup" element={<Layout><Signup /></Layout>} />
        <Route path="/event-plan" element={<Layout><EventPlan /></Layout>} />
        <Route path="/event-detail" element={<Layout><EventDetail /></Layout>} />
        <Route path="/booking-page" element={<Layout><BookingPage /></Layout>} />
        <Route path="/client" element={<Layout><ClientProfile /></Layout>} />
      
        <Route path="/admin-dashboard/sidebar" element={<Layout><Sidebar /></Layout>} />
        <Route path="/admin-dashboard/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/admin-dashboard/add-event" element={<Layout><AddEvent /></Layout>} />
        <Route path="/admin-dashboard/update-event" element={<Layout><UpdateEvent /></Layout>} />
        <Route path="/admin-dashboard/delete-event" element={<Layout><DeleteEvent /></Layout>} />
        <Route path="/admin-dashboard/view-bookings" element={<Layout><ViewBookings /></Layout>} />

        
        {/* Fallback route */}
      </Routes>
    </Router>
  );
}

export default App;
