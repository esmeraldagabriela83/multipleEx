
import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import '../App.css';

//https://www.youtube.com/watch?v=4sosXZsdy-s
//https://github.com/bradtraversy/bootstrap-bootcamp-website/blob/main/index.html

function NavFinal(props){

  //destructurare props
   const {propColor , propNr , propText}=props;


return(

<>



<article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
  </article>



<nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3">

<div className="container">

<a href="#" className="navbar-brand">Frontend tutorial</a>

<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
<span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse" id="navmenu">
<ul className="navbar-nav ms-auto">
            <li className="nav-item">
             <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/info">Info</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact">Contact</Link>
            </li>
          

          </ul>
</div>

</div>

</nav>


</>

);

}
export default NavFinal;
