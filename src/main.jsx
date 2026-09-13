import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartProvider } from "./context/CartContext";

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
  <CartProvider>
    <App />
  </CartProvider>
  </BrowserRouter>
  </React.StrictMode>
);
