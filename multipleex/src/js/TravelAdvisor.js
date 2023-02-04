import React , {useState , useEffect} from "react";
import '../App.css';


function TravelAdvisor(props){

  //destructurare props
  const {propColor , propNr , propText}=props;
  console.log("props are: " , propColor , propNr , propText);

  //----------------------------

useEffect(() =>{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '08b5381c26msh054d91de7c0c3e5p12d313jsn5f7569645072',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
    };
    
    fetch('https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete?query=eiffel%20tower&lang=en_US&units=km', options)
        .then(response => response.json())
        .then(response => console.log("TravelAdvisor" , response))
        .catch(err => console.error(err));
} , []);

  //----------------------------

return(<>

  <article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
  </article>





  </>);

}

export default TravelAdvisor;
