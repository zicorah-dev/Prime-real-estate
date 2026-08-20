import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Properties from "./pages/Properties";
import PropertyDetails from "./pages/PropertyDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";


function RoutesComponent(){
    return(
        <>
        <Navbar/>

        <Routes>

        <Route path="/" element={<Home/>}/>
        
        <Route 
        path="/properties" 
        element={<Properties/>}/>

        <Route 
        path="/property/:id" 
        element={<PropertyDetails/>}/>

        <Route 
        path="/about" 
        element={<About/>}/>

        <Route 
        path="/contact" 
        element={<Contact/>}/>

        <Route 
        path="/cart" 
        element={<Cart/>}/>

        <Route 
        path="/checkout" 
        element={<Checkout/>}/>

        </Routes>

        <Footer/>
        </>
    )
}

export default RoutesComponent;