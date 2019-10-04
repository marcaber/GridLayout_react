import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <MainContent />
      <Sidebar />
      <Footer />
    </div>
  );
};

export default App;
