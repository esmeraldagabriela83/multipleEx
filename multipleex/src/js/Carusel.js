import React, {useState, useEffect} from "react";
import '../App.css';


function Carusel(props){

  //destructurare props
  const {propColor , propNr , propText}=props;
console.log("props are: " , props);
console.log("propColor is : " , propColor);
console.log("propNr is : " , propNr);
console.log("propText is : " , propText);

//style variable
const mystyle={
  padding:'1em',
  margin:'0.5em',
  backgroundColor:'yellow',
  fontSize:'1.5rem',
  color:propColor
};



return(

<>
  <h2 style={{color:propColor}}>function component: {propText}</h2>

<h2 id="carusel_title" style={{backgroundColor:propColor}}>carusel bootsrap</h2>

<h3 style={{color:propColor , backgroundColor:"yellowgreen"}}>carusel</h3>

<h4 style={mystyle}>{propText}</h4>

<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="./images/crop-bostan.jpg" className="d-block w-100 img-fluid" alt="...1"/>
    </div>
    <div className="carousel-item">
      <img src="./images/plate.jpg" className="d-block w-100 img-fluid" alt="...2"/>
    </div>
    <div className="carousel-item">
      <img src="./images/cake.jpg" className="d-block w-100 img-fluid" alt="...3"/>
    </div>
    <div className="carousel-item">
      <img src="./images/tort-ciocolata.jpg" className="d-block w-100 img-fluid" alt="...myimg"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


</>

);

}

export default Carusel;
