import react from 'react';
import './App.css';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';  s
import Navbar from './Navbar';
// import ModelS from './ModelS';
// import { BrowserRouter, Route , Routes } from 'react-router-dom';
const Models = () => (
    <>
<Navbar/>
    <div className='images-3'>
    <div className='background-image1'>
        <div className="modelname">  Model  S  </div> 
        <p className='para'>Order Online for <a href='#'> Touchless Delivery  </a> </p>
        <a href="/customorder">

         <button className='custom-order'>CUSTOM ORDER</button>
         </a>
         <a href="/customorder">

         <button className='existing-inventary'>EXISTING INVENTORY</button> 
         </a>
         </div>
         </div>
   </>
 )
 export default Models;
 