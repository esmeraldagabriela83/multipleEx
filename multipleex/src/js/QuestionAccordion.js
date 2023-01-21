import React, {useState} from "react";
//import '../App.css';

//----have to match :btn cu atributul data-bs-target si div cu id pt fiecare element din acordeon

function QuestionAccordion(props){

  //destructurare props
  const {propColor , propNr, propText}=props;


return(<>

  <article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
  </article>


<article id="questions" className="p-5">

  <div className="container mb-4">
<h2 className="mb-4">FAQ</h2>


<div className="accordion accordion-flush" id="accordionFlushExample">


  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#questionOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne">
        Question 1
      </button>
    </h2>
    <div id="questionOne"
         className="accordion-collapse collapse"
         aria-labelledby="flush-headingOne"
         data-bs-parent="#accordionFlushExample">



       <div className="row align-items-center justify-content-between g-3">
       <div className="col-md">
          <img src="./images/copy.jpg" alt="learn-section-img" className="img-fluid w-70 mt-3 mb-3" id="copy_img"/>
       </div>

       <div className="col-md">
          <img src="./images/cat.JPG" alt="learn-section-img" className="img-fluid w-70 mt-3 mb-3" id="cat_img"/>
       </div>
       </div>


      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>


  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#questionTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo">
        Question 2
      </button>
    </h2>
    <div id="questionTwo"
         className="accordion-collapse collapse"
         aria-labelledby="flush-headingTwo"
         data-bs-parent="#accordionFlushExample">


         <div className="row align-items-center justify-content-between g-3">
         <div className="col-md">
            <img src="./images/myPhoto2.JPG" alt="learn-section-img" className="img-fluid w-70 mt-3 mb-3" id="MYPHOTO_img"/>
         </div>

         <div className="col-md">
            <img src="./images/springtree.JPG" alt="learn-section-img" className="img-fluid w-70 mt-3 mb-3" id="SPRINGTREE_img"/>
         </div>
         </div>


      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>


  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#questionThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree">
        Question 3
      </button>
    </h2>
    <div id="questionThree"
         className="accordion-collapse collapse"
         aria-labelledby="flush-headingThree"
         data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>


  </div>

</article>


  </>);

}

export default QuestionAccordion;
