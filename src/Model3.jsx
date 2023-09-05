import React from "react";
import Navbar from "./Navbar";

const Model3 = () => {
    return (
    <>
    
    <Navbar/>

    <div className='images-3'>
    <div className='background-image4'>
        <div className="modelname">  Model 3  </div>
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
    };
export default Model3;