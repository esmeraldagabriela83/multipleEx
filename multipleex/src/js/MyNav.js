
import React, {useState, useEffect} from "react";
import '../App.css';

//https://www.youtube.com/watch?v=4sosXZsdy-s
//https://github.com/bradtraversy/bootstrap-bootcamp-website/blob/main/index.html

function MyNav(props){

  //destructurare props
   const {propColor , propNr , propText}=props;


return(

<>

<h1 style={{color:propColor}}>{propText}</h1>

<h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>first navbar: {propText}</h1>

<nav className="navbar navbar-expand-lg bg-primary navbar-dark py-3 fixed-top">

<div className="container">

<a href="#" className="navbar-brand">Frontend tutorial</a>

<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
<span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse" id="navmenu">
<ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="#learn" className="nav-link">What You'll Learn</a>
            </li>
            <li className="nav-item">
              <a href="#questions" className="nav-link">Questions</a>
            </li>
            <li className="nav-item">
              <a href="#instructors" className="nav-link">Instructors</a>
            </li>
          </ul>
</div>

</div>

</nav>


</>

);

}
export default MyNav;
