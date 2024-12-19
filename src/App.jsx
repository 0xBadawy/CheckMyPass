import React from "react";
import HomePage from "./pages/HomePage";
import "./index.css";
import ApiChecker from "./components/ApiChecker";

const App = () => {
  return (
    <div className="min-h-screen bg-white  ">
      <div className="">
        <HomePage />
      </div>
    </div>
  );
};

export default App;
