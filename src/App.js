import './App.css';
import Employee from './Employee';



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
