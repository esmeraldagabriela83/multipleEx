import React, {useState} from "react";
//import '../App.css';

//--------------------------------

function Instructors(props){

  //destructurare props
  const {propColor , propNr, propText}=props;


return(<>

  <article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
  </article>


<article id="instructors" className="bg-primary p-5">

<div className="container">

<h2 className="text-white">Instructors</h2>

<p className="lead text-white text-left mb-5">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                      beatae fuga animi distinctio perspiciatis adipisci velit maiores
                      totam tempora accusamus modi explicabo accusantium consequatur,
                      praesentium rem quisquam molestias at quos vero. Officiis ad
                      velit doloremque at. Dignissimos praesentium necessitatibus
                      natus corrupti cum consequatur aliquam! Minima molestias iure
                      quam distinctio velit.
</p>

<div className="row g-3">

  <div className="col-md-6 col-lg-3">

     <div className="card bg-light">
         <div className="card-body text-center">

<img src="https://randomuser.me/api/portraits/women/25.jpg" className="rounded-circle mb-3" alt="userApiImg" />

<h3 className="card-title mb-3">teacher 1</h3>

<p className="card-text">
1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                      beatae fuga animi distinctio perspiciatis adipisci velit maiores
                      totam tempora accusamus modi explicabo accusantium consequatur,
                      praesentium rem quisquam molestias at quos vero. Officiis ad
                      velit doloremque at. Dignissimos praesentium necessitatibus
                      natus corrupti cum consequatur aliquam! Minima molestias iure
                      quam distinctio velit.
</p>


<a href="#"><i className="bi bi-twitter text-black-50 mx-1"></i></a>
<a href="#"><i className="bi bi-facebook text-black-50 mx-1"></i></a>
<a href="#"><i className="bi bi-linkedin text-black-50 mx-1"></i></a>
<a href="#"><i className="bi bi-instagram text-black-50 mx-1"></i></a>


         </div>
     </div>

  </div>







  <div className="col-md-6 col-lg-3">

     <div className="card bg-light">
         <div className="card-body text-center">

  <img src="https://randomuser.me/api/portraits/men/35.jpg" className="rounded-circle mb-3" alt="userApiImg" />

  <h3 className="card-title mb-3">teacher 2</h3>

  <p className="card-text">
  2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                      beatae fuga animi distinctio perspiciatis adipisci velit maiores
                      totam tempora accusamus modi explicabo accusantium consequatur,
                      praesentium rem quisquam molestias at quos vero. Officiis ad
                      velit doloremque at. Dignissimos praesentium necessitatibus
                      natus corrupti cum consequatur aliquam! Minima molestias iure
                      quam distinctio velit.
  </p>


  <a href="#"><i className="bi bi-twitter text-black-50 mx-1"></i></a>
  <a href="#"><i className="bi bi-facebook text-black-50 mx-1"></i></a>
  <a href="#"><i className="bi bi-linkedin text-black-50 mx-1"></i></a>
  <a href="#"><i className="bi bi-instagram text-black-50 mx-1"></i></a>


         </div>
     </div>

  </div>










  <div className="col-md-6 col-lg-3">

     <div className="card bg-light">
         <div className="card-body text-center">

  <img src="https://randomuser.me/api/portraits/men/78.jpg" className="rounded-circle mb-3" alt="userApiImg" />

  <h3 className="card-title mb-3">teacher 3</h3>

  <p className="card-text">
  3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                      beatae fuga animi distinctio perspiciatis adipisci velit maiores
                      totam tempora accusamus modi explicabo accusantium consequatur,
                      praesentium rem quisquam molestias at quos vero. Officiis ad
                      velit doloremque at. Dignissimos praesentium necessitatibus
                      natus corrupti cum consequatur aliquam! Minima molestias iure
                      quam distinctio velit.
  </p>


  <a href="#"><i className="bi bi-twitter text-black-50 mx-1"></i></a>
  <a href="#"><i className="bi bi-facebook text-black-50 mx-1"></i></a>
  <a href="#"><i className="bi bi-linkedin text-black-50 mx-1"></i></a>
  <a href="#"><i className="bi bi-instagram text-black-50 mx-1"></i></a>


         </div>
     </div>

  </div>









  <div className="col-md-6 col-lg-3">

     <div className="card bg-light">
         <div className="card-body text-center">

  <img src="https://randomuser.me/api/portraits/women/75.jpg" className="rounded-circle mb-3" alt="userApiImg" />

  <h3 className="card-title mb-3">teacher 4</h3>

  <p className="card-text">
  4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                      beatae fuga animi distinctio perspiciatis adipisci velit maiores
                      totam tempora accusamus modi explicabo accusantium consequatur,
                      praesentium rem quisquam molestias at quos vero. Officiis ad
                      velit doloremque at. Dignissimos praesentium necessitatibus
                      natus corrupti cum consequatur aliquam! Minima molestias iure
                      quam distinctio velit.
  </p>


  <a href="#"><i className="bi bi-twitter text-black-50 mx-1"></i></a>
  <a href="#"><i className="bi bi-facebook text-black-50 mx-1"></i></a>
  <a href="#"><i className="bi bi-linkedin text-black-50 mx-1"></i></a>
  <a href="#"><i className="bi bi-instagram text-black-50 mx-1"></i></a>


         </div>
     </div>

  </div>










</div>

</div>

</article>



  </>);

}

export default Instructors;
