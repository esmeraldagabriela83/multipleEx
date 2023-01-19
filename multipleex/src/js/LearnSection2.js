import React, {useState} from "react";
//import '../App.css';

//--------------------------------



const learn_content2="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.";

//--------------------------------

//--------------------------------

function LearnSection(props){

//destructurare props
const {propColor , propNr, propText}=props;

return(<>

  <article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
  </article>

  <section id="learn2" className="p-5 bg-dark text-light">

    <div className="container">

       <div className="row align-items-center justify-content-between">

          <div className="col-md p-5">
              <h2>Learn the fundamentals</h2>

              <p className="lead">1. {learn_content2}</p>

              <p>2. {learn_content2}</p>

              <a href="#" className="btn btn-light mt-3"><i className="bi bi-chevron-right"></i>Read more</a>
          </div>


          <div className="col-md">
             <img src="./images/plate.jpg" alt="learn-section-img" className="img-fluid" id="plate_img"/>
          </div>

       </div>

    </div>

  </section>

  </>);

}

export default LearnSection;
