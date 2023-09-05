import react from "react";

const Navbar = () =>{
    return (
    <>
        <div className="nav-buttons">
            <a href="/modelx">
        <button className='btn1'>Model X</button>
        </a>
        <a href="/models">
       <button className='btn1'>Model S</button>
       </a>
       <a href="/model3">
       <button className='btn1'>Model 3</button> 
       </a>
       <a  href="/modely">
       <button className='btn1'>Model Y</button>
       </a>   
   </div>
   {/* <div>
   <a href="/customorder">
   <button className='ordernow'>ORDER NOW</button>
   </a>
    <img src="https://png.monster/wp-content/uploads/2021/03/Tesla_Inc.-Wordmark-Black-Logo.wine-6bbe293a-450x300.png" className='tesla' alt="" /> 
   </div> */}
    </>
    )
}
export default Navbar;