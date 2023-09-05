import Models from './Models';
import react from 'react';
import Navbar from './Navbar';
// import { Route } from 'react-router-dom';
import { BrowserRouter, Route , Routes } from 'react-router-dom';
// import ModelS from './ModelS';
// import Body from './Body';
import Modelx from './Modelx';
import Modely from './Modely';
// import Models from './Models';
import Model3 from './Model3';
import Customorder from './Customorder';

function App()  {
  return (

    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Models />} />
        <Route path="/modelx" element={<Modelx />} />
        {/* <Route path="/model" element={<Modelx />} />  */}
        <Route path="/modely" element={<Modely />} />
        <Route path="/models" element={<Models />} />
        <Route path="/model3" element={<Model3 />} />
        <Route path="/customorder" element={<Customorder />} />
      </Routes>
    </BrowserRouter>
  {/* ); */}

     {/* <Homepage/> */}
      
    </div>


    
  );
}

export default App;
