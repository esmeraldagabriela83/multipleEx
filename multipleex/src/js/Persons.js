import React from "react";
import personArrWithObj from './personArrWithObj.js';
import Person from "./Person.js";
import '../App.css';


console.log("personArrWithObj arr is : " , personArrWithObj);
console.log(personArrWithObj[2].name);


function Persons(props){

  //destructurare props
  const {propColor , propNr , propText}=props;
  console.log("props are: " , propColor , propNr , propText);


return(<>

  <article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
  </article>

 
  <article style={{display:"flex" , alignItems:"center" , justifyContent:"center", flexWrap:"wrap" , padding:"1em" , border:"1px solid green"}}>
      
      {personArrWithObj.map((eachPerson , index) =>{
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


  </>);

}

export default Persons;
