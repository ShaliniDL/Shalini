import React, { useState } from "react";


function Header(props){
    const [name, setName] = useState("Initial Value");
    const [color, setColor] = useState("blue");
    const [count, setCount] = useState(0);
    const sampleArray=["shalini","js","react",3000];
    const array2=['html','js','react'];
  
    return(
        <div>
            <h1 style={{background: props.propsdata }}> REACT </h1>
            <p>{props.propsdata}</p>
            {
            sampleArray.map((item) => {
                return <h1>{item}</h1>;
            })
            }
            <ol>
                {
                    array2.map((item) => {
                        return <li>{item}</li>;
                    })
                }
            </ol>
            <h1>{name}</h1>
            <button onClick={() => setName("Updated Value")}>Click Here</button>

            <p>{color}</p> 
            <form style={{backgroundColor:color}}>
                <input />
            </form>
            <div onClick={() => setColor("yellow")}>Change Color</div>

            <div>
                 <p>Count:{count}</p>
                 <button onClick = {()=> setCount(count+1)}>Increase</button>
                 
            </div>
        </div>
    );
}
export default Header;