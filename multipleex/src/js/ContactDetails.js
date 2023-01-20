import React, {useState} from "react";
import '../App.css';


//https://github.com/bradtraversy/bootstrap-bootcamp-website/blob/main/index.html
//https://www.youtube.com/watch?v=4sosXZsdy-s


function ContactDetails(props){


      //destructurare props
  const {propColor , propNr , propText}=props;
  console.log("props are: " , propColor , propNr , propText);


return(<>

<article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
  </article>


<section className="p-5">

<div className="container">

    <div className="row g-3">

     <div className="col-md">
<h2 className="mb-4">Contact info</h2>

<ul className="list-group list-group-flush lead">
              <li className="list-group-item">
                <span className="fw-bold">Main Location:</span> 50 Main st Boston MA
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Enrollment Phone:</span> (555) 555-5555
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Student Phone:</span> (333) 333-3333
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Enrollment Email:</span> (555)
                enroll@frontendbc.test
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Student Email:</span>
                student@frontendbc.test
              </li>
            </ul>
     </div>

    </div>

</div>

</section>


</>);

}

export default ContactDetails;