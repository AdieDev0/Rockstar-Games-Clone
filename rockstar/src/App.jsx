import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import Newswire from "./Components/Shared/Newswire";
import Download from "./Components/Shared/Download";
import Videos from "./Components/Shared/Videos";

const App = () => {
  return (
    <Router>
      {/* Nav is placed outside Routes so it appears on all pages */}
      <Nav />

      <Routes>
        {/* Define the route for the Hero component */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Footer />
            </>
          }
        />
        <Route path="/newswire" element={<Newswire />} />
        <Route path="/Download" element={<Download />} />
        <Route path="/Videos" element={<Videos />} />

        {/* Add other routes here as needed */}
      </Routes>
    </Router>
  );
};

export default App;
