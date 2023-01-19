import React, {useState} from "react";
import '../App.css';


//https://www.youtube.com/watch?v=4sosXZsdy-s
//https://github.com/bradtraversy/bootstrap-bootcamp-website/blob/main/index.html

//https://getbootstrap.com/docs/5.2/forms/input-group/
//Button addons

function Newsletter(props){

  //destructurare props
   const {propColor , propNr , propText}=props;

  const [userEmail , setUserEmail] = useState("");

//take value from input
const handleTakeInputValueFromUser=(event) =>{
  setUserEmail(event.target.value);
  console.log("input was filled with : " , userEmail);
}

//show user value from input only after clicking the submit button
const handleShowUserValue=(event) =>{
  event.preventDefault();
  console.log("you clicked the show email btn");
  console.log("btn submit clicked" , userEmail);
//-----------shou the value on page after user click the btn

const userEmailValue=document.getElementById('userEmailValue');
console.log("userEmailValue is : " , userEmailValue);
userEmailValue.style.border=`3px solid ${propColor}`;
userEmailValue.style.padding='0.7em 0.3em';
userEmailValue.style.borderRadius='10px';
userEmailValue.innerText=userEmail;

}

return(
  <>
  <article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
  </article>

<section className="bg-primary text-light p-5">
<div className="container">

<div className="d-md-flex justify-content-between align-items-center">

<h3 className="mb-3 mb-md-0">Sign up to our Newsletter</h3>

<div className="input-group mb-3" id="news-input">
  <input type="email"
         className="form-control"
         placeholder="Enter email"
         onChange={handleTakeInputValueFromUser}/>
  <button type="button"
          className="btn btn-dark btn-lg"
          id="button-addon2"
          onClick={handleShowUserValue}>Show email</button>
</div>

</div>
<p>your email is : {userEmail}</p>
<p id="userEmailValue"></p>
</div>
</section>
  </>
);

}

export default Newsletter;
