import React from "react";
import personArrWithObj from './personArrWithObj.js';
//import Person from "./Person.js";
import '../App.css';


console.log("personArrWithObj arr is : " , personArrWithObj);
console.log(personArrWithObj[2].name);


function PersonsIf(props){

  //destructurare props
  const {propColor , propNr , propText}=props;
  console.log("props are: " , propColor , propNr , propText);

  //---------------------------------

const handleOver40=(event)=>{
    event.preventDefault();
    console.log("you clicked to show people over 40");

    const allliperson=document.querySelectorAll(".liperson");

    for(let i=0 ; i<personArrWithObj.length ; i++){

        if(personArrWithObj[i].age >= 40){
            allliperson[i].style.backgroundColor="pink";
            allliperson[i].innerText= personArrWithObj[i].name + " is old" ;
            
        }

    }

}

//---------------------------------

const handleUNDER40=(event)=>{
    event.preventDefault();
    console.log("you clicked to show people UNDER 40");


    const allliperson=document.querySelectorAll(".liperson");

    for(let i=0 ; i<personArrWithObj.length ; i++){

        if(personArrWithObj[i].age < 40){
            allliperson[i].style.backgroundColor="yellowgreen";
            allliperson[i].innerText=personArrWithObj[i].name + " is young" ;
        }

    }

    

}
//---------------------------------

return(<>

  <article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
  </article>

  <article style={{display:"flex" , alignItems:"center" , justifyContent:"center", flexWrap:"wrap" , padding:"1em" , border:"1px solid pink"}}>
    <ul>
            <li className="liperson"></li>
            <li className="liperson"></li>
            <li className="liperson"></li>
            <li className="liperson"></li>
            <li className="liperson"></li>
            <li className="liperson"></li>
            <li className="liperson"></li>
        </ul>
    </article>
  
    
   

    <button onClick={handleOver40}>show people over 40</button>
    
    <button onClick={handleUNDER40}>show people UNDER 40</button>

  </>);

}

export default PersonsIf;
