import React,{useState} from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import { Craftupload } from "./components/Craftupload";
import { Manage } from "./components/Manageproduct";
import Product from "./components/Product";
import { Addcategory } from "./components/Addcategory";
import Login from "./components/Login";
import Contact from "./components/Contact";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    
    <BrowserRouter>
        <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/addcategory" element={<Addcategory/>} />
        <Route path="/craftupload" element={<Craftupload/>} />
        <Route path="/manageproduct" element={<Manage/>}/>
        <Route path="/admin/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
