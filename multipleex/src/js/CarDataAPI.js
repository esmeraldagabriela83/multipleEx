import React , {useState , useEffect} from "react";
import '../App.css';


//https://www.youtube.com/watch?v=eUr4YoJm2Sw&t=601s
//https://github.com/dikshitakambri/RapidApi-in-React

//rapid API
//https://rapidapi.com/principalapis/api/car-data/


function CarDataAPI(props){

  //destructurare props
  const {propColor , propNr , propText}=props;
  console.log("props are: " , propColor , propNr , propText);


  //----------------------------------

useEffect(() =>{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '08b5381c26msh054d91de7c0c3e5p12d313jsn5f7569645072',
            'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
        }
    };
    
    fetch('https://car-data.p.rapidapi.com/cars?limit=10&page=0', options)
        .then(response => response.json())
        .then(response => {
            console.log("...car API" , response);
        })
        .catch(err => console.error(err));
} , []);

  //----------------------------------


return(<>

  <article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
  </article>




  </>);

}

export default CarDataAPI;
