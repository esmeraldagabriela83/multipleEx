import React, {useState} from "react";
//import '../App.css';

//--------------------------------



const learn_content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.";

//--------------------------------

function LearnSection(props){

//destructurare props
const {propColor , propNr, propText}=props;


return(<>

  <article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
  </article>

  <div className="h1 m-3 p-3 bg-primary text-light"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-book-fill" viewBox="0 0 16 16">
    <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
  </svg></div>

<section id="learn" className="p-5 bg-warning">

  <div className="container">

     <div className="row align-items-center justify-content-between">

        <div className="col-md">
           <img src="./images/cake.jpg" alt="learn-section-img" className="img-fluid" id="cake_img"/>
        </div>

        <div className="col-md p-5">
            <h2>Learn the fundamentals</h2>

            <p className="lead">1. {learn_content}</p>

            <p>2. {learn_content}</p>

            <a href="#" className="btn btn-light mt-3"><i className="bi bi-chevron-right"></i>Read more</a>
        </div>

     </div>

  </div>

</section>

  </>);

}

export default LearnSection;
