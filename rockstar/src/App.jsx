import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <Router>
      {/* Nav is placed outside Routes so it appears on all pages */}
      <Nav />

      <Routes>
        {/* Define the route for the Hero component */}
        <Route path="/" element={
          <>
          < Hero />
          <Footer/>
          </>
        } 
          />

        {/* Add other routes here as needed */}
      </Routes>
    </Router>
  );
};

export default App;
