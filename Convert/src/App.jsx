import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Particles from "./components/Particles";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Particles />
        <Header />
        <main>
          <HomePage />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
