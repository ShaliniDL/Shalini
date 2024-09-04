// import logo from './logo.svg';
import './App.css';
// import Header from './Header';
// import {Route, Routes} from 'react-router-dom';
// import Home from './Home';
// import Section from './Section';
// import About from './About';
// import Contact from './Contact';
// import Header1 from './Header1';
// import Register from './Register';
// import Login from './Login';
// import Header12 from './Header1';
 import './headerstyle.css';
import Employee from './Employee';
//  import { useState } from 'react';
// import Example from './Modal';
// import { Test } from './Use_effect';



function App() {
  //const data = "red";
  // const [backgroundColor, setBackgroundColor] = useState('white');

  //   const handleClick = (color) => {
  //     setBackgroundColor(color);
  //     document.body.style.backgroundColor = color;
  //   };
  return (
    
    <div className="App">
      
      {/* <Header1/>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/Section" element={<Section/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
      </Routes> */}
      
      {/* <button onClick={() => handleClick('red')}>Red</button>
      <button onClick={() => handleClick('blue')}>Blue</button>
      <button onClick={() => handleClick('green')}>Green</button>
      <button onClick={() => handleClick('grey')}>Grey</button><br></br> */}
      
      {/* <Example/> */}
     
      {/* <Test/> */}
        <Employee/>
    </div>
   
  );
}

export default App;
