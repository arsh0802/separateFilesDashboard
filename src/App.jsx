import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import MyRoadmaps from './components/MyRoadmaps';
import MyProfile from './components/MyProfile';
import Feedback from './components/Feedback';
import WhatsNew from './components/WhatsNew';
import EditProfile from './components/EditProfile';  // Ensure this path is correct

const AppContent = () => {
  const location = useLocation();

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Sidebar */}
      <Sidebar />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* Conditionally render Navbar */}
        {location.pathname !== '/my-roadmaps' && <Navbar />}

        {/* Content Routes */}
        <Routes>
          {/* <Route path="/" element={<LandingPage />} />  */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/MyRoadmaps" element={<MyRoadmaps />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/WhatsNew" element={<WhatsNew />} />
          <Route path="/EditProfile" element={<EditProfile />} />
        </Routes>
      </Box>
    </Box>
  );
};

const App = () => {
  return (
    <Router>
        <AppContent />
    </Router>
  );
};

export default App;
