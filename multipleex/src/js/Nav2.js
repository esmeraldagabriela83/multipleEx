import React, {useState, useEffect} from "react";
//import '../App.css';

//Supported content
//https://getbootstrap.com/docs/5.2/components/navbar/#how-it-works




function Nav2(props){

  //destructurare props
   const {propColor , propNr , propText}=props;


return(
<section style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
<h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>first navbar: {propText}</h1>

<nav className="navbar navbar-expand-lg" style={{backgroundColor:'Darkorange'}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">mylogo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#learn">Learn</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#questions">Questions</a></li>
            <li><a className="dropdown-item" href="#instructors">Instructors</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#myidea1">My idea1</a></li>
            <li><a className="dropdown-item" href="#myidea2">My idea2</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

</section>
);

}

export default Nav2;
