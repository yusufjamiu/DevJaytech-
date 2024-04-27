import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeContent from './pages/Home/HomeContent'; // Corrected import for HomeContent
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import Manaar from './pages/Home/SubContent/Manaar';
import Maktab from './pages/Home/SubContent/Maktab';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow pt-16">
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/manaar" element={<Manaar />} />
            <Route path="/maktab" element={<Maktab />} />
            <Route path="/" element={<HomeContent />} /> {/* Use HomeContent instead of Home */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
