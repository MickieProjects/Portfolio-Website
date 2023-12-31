import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Home from "./Home/Home";

const App = () => {
  return (
    <div className="bg-[#23232F]">
      <div className="container mx-auto">
        <Navbar />
        <Home />
      </div>
    </div>
  );
};

export default App;
