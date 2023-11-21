import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import "./App.scss";
import { Home, Login, Register ,Contact ,About} from "./pages";

const App = () => {
  return (
    <div className="app">
   <BrowserRouter>


<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/about" element={<About />} />

</Routes>
</BrowserRouter> 
    
    </div>
  );
};

export default App;

