// import React from "react";
import React, {useState} from "react";
import personArrWithObj from './personArrWithObj.js';
import Person from "./Person.js";
import '../App.css';


console.log("personArrWithObj arr is : " , personArrWithObj);
console.log(personArrWithObj[2].name);
//----------------



//----------------

function PersonsIf2(props){

  //destructurare props
  const {propColor , propNr , propText}=props;
  console.log("props are: " , propColor , propNr , propText);

  //--------------------------------------

  const [filteredArrOver18 , setFilteredArrOver18]=useState([]);
  const [filteredArrUnder18 , setFilteredArrUnder18]=useState([]);

  //---------------------------------

const handleOver402=(event)=>{
    event.preventDefault();
    console.log("2 you clicked to show people over 18");

//https://www.w3schools.com/jsref/jsref_filter.asp

//programare functionala
//FUNCTIONAL (metoda filter)
//contine return
//AUXILIAR
let sample = [];
const newfilteredArrOver18 = personArrWithObj.filter(function(person,index) {
    //return conditie
    //can conditia e ADEVARATA se pastreaza valoarea
    sample.push(person.age >= 18);
    return person.age >= 18;
})

setFilteredArrOver18(newfilteredArrOver18);
console.log("sample >=18 is : " , sample);
console.log("filteredArrOver18 is : " , filteredArrOver18);

}

//---------------------------------

const handleUNDER402=(event)=>{
    event.preventDefault();
    console.log("2 you clicked to show people UNDER 18");

//https://www.w3schools.com/jsref/jsref_filter.asp

//programare functionala
//FUNCTIONAL (metoda filter)
//contine return
//AUXILIAR
let sample = [];
const newFilteredArrUnder18 = personArrWithObj.filter(function(person,index) {
    //return conditie
    //can conditia e ADEVARATA se pastreaza valoarea
    sample.push(person.age < 18);
    return person.age < 18;
})

setFilteredArrUnder18(newFilteredArrUnder18);
console.log("sample < 18 is : " , sample);
console.log("filteredArrUnder18 is : " , filteredArrUnder18);
}
//---------------------------------

return(<>

  <article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
  </article>


  
    <article style={{display:"flex" ,
                     alignItems:"center" ,
                     justifyContent:"center",
                     flexWrap:"wrap" , 
                     padding:"1em" , 
                     backgroundColor:"deeppink",
                     border:"3px solid pink"}}>
        
    {filteredArrOver18.map((eachPerson , index) =>{
        //map are intotdeauna return
        return(<>
          <div key={index}>
                  <Person propColor={"chocolate"} propNr={630} propText={"Person"}
                      propName={eachPerson.name}
                      propAge={eachPerson.age}
                      propImage={eachPerson.image}
                      propTextPerson={eachPerson.text}
                      />
          </div>        
        </>);
      })} 


    
    </article>


    <button onClick={handleOver402}>show people OVER 18 2</button>




    <article style={{display:"flex" ,
                     alignItems:"center" ,
                     justifyContent:"center",
                     flexWrap:"wrap" ,
                     padding:"1em" ,
                     backgroundColor:"yellowgreen",
                     border:"3px solid green"}}>
      
    {filteredArrUnder18.map((eachPerson , index) =>{
        //map are intotdeauna return
        return(<>
          <div key={index}>
                  <Person propColor={"chocolate"} propNr={630} propText={"Person"}
                      propName={eachPerson.name}
                      propAge={eachPerson.age}
                      propImage={eachPerson.image}
                      propTextPerson={eachPerson.text}
                      />
          </div>        
        </>);
      })} 


  
    </article>

    <button onClick={handleUNDER402}>show people UNDER 18 2</button>
   

  </>);

}

export default PersonsIf2;
