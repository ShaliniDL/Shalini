import React from "react";
import { Link } from "react-router-dom";


function Header1(){
 
    return(
        <div>
            <nav>
            <Link to="/" style={{textDecoration:"none"}}><li>Home</li></Link>
            <Link to="/Section" style={{textDecoration:"none"}}><li>Section</li></Link>
            <Link to="/About" style={{textDecoration:"none"}}><li>About</li></Link>
            <Link to="/Contact" style={{textDecoration:"none"}}><li>Contact Us</li></Link>
            <Link to="/Login" style={{textDecoration:"none"}}><li>Login</li></Link>
            <Link to="/Register" style={{textDecoration:"none"}}><li>Register</li></Link>
            </nav>
        
        </div>
       
    );
}
export default Header1;