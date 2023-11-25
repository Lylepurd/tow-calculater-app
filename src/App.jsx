import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Location from './pages/Location';
import TruckDetails from './pages/TruckDetails';
import Rate from './pages/Rate';
import RateBrackdown from './pages/rateBrackdown';
import Home from './pages/Home';
import 'tachyons';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {

  return (
    <>
      <Router>
      <nav> </nav>

      
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/locations" element={<Location />} />
        <Route path="/truckdetails" element={<TruckDetails />} />
        <Route path="/rate" element={<Rate />} />
        <Route path="/ratesbrackdown" element={<RateBrackdown />} />


      </Routes>

    </Router>
    </>
  )
}

export default App
