import React, {useState, useEffect} from "react";
//import '../App.css';




function Showcase(props){

  //destructurare props
   const {propColor , propNr , propText}=props;

return(
<>
  <article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
  </article>

  <section className="bg-dark text-light p-5 pb-lg-0 pt-lg-5 text-center text-sm-start">
<div className="container">

<div className="d-sm-flex align-items-center justify-content-between">

   <div>
   <h1>Become a <span className="text-warning">web developer</span></h1>
   <p className="lead my-4">
              We focus on teaching our students the fundamentals of the latest
              and greatest technologies to prepare them for their first dev role
    </p>
    <button
             className="btn btn-primary btn-lg"
             data-bs-toggle="modal"
             data-bs-target="#enroll"
           >
             Start The Enrollment
           </button>
   </div>

<img  className="img-fluid w-50 d-none d-sm-block" src="./images/illustrator_welcome.svg" alt="illustratorImg"/>

</div>

</div>
  </section>
  </>
);


}

export default Showcase;
