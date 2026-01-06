import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Footer from './components/Footer';
import ContactPopup from './components/ContactPopup';

const App: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<Home openPopup={openPopup} />} />
          <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
        <ContactPopup isOpen={isPopupOpen} onClose={closePopup} />
      </div>
    </Router>
  );
};

export default App;
