// use effect

import React, { useEffect, useState } from "react";
 
export const Test = () => {
  const [value, setValue] = useState(false);
 
  useEffect(() => {
    console.log("effect");
  });
 
  const clickHandler = () => {
    setValue((prevState) => !prevState);
  };
 
  return (
    <div>
      <h1>{value ? "hello" : "hey"}</h1>
      <button onClick={clickHandler}>Click me</button>
    </div>
  )};

// // cleanup in use effect  
// import React, { useEffect, useState } from "react";
 
// export const Test = () => {
//   const [value, setValue] = useState(false);
 
//   useEffect(() => {
//     console.log("effect");
//     return () => {
//       console.log("clean up");
//     };
//   }, [value]);
 
//   const clickHandler = () => {
//       setValue(prevState=>!prevState);
//   }
 
//   return (
//     <div>
//       <h1>{value ? "hello" : "hey"}</h1>
//       <button onClick={clickHandler}>click me</button>
//     </div>
//   );
// };