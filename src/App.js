import React from "react";  
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import { SocialLinks } from "./components/SocialLinks";


function App() {
  return (
   <div className="bg-black text-gray-50">
      <NavBar />
      <Home />
      <Experience />
      <Portfolio />
   
      <Footer />
      <SocialLinks />
   </div>
  );
}

export default App;