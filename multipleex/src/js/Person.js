import React from "react";
import '../App.css';


function Person(props){

  //destructurare props
  const {propColor , propNr , propText , propName , propAge , propImage , propTextPerson}=props;
  console.log("props are: " , propColor , propNr , propText, propName , propAge , propImage , propTextPerson);


return(<>

  {/* <div style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
  </div> */}


<div  className="container" style={{ padding:"1em" , border:`1px solid ${propColor}`}}>

    <div className="card my-2 mx-3" style={{width: "300px"}}>
    <img src={propImage} className="card-img-top" alt="person-img"/>
    <div className="card-body">
        <h5 className="card-title">{propName}</h5>
        <p className="card-text">{propAge}</p>
        <p className="card-text">{propTextPerson}</p>
        <a href="https://www.pexels.com/ro-ro/cauta/person/" target="_blank" className="btn btn-primary">Find person</a>
    </div>
    </div>

 </div>


  </>);

}

export default Person;
