import React, { useEffect } from "react";
import axios from "axios";
import '../App.css';


function Dessert(props){

  //destructurare props
  const {propColor , propNr , propText}=props;
  console.log("props are: " , propColor , propNr , propText);

  //-----------------------

useEffect(() =>{
 

    const options = {
      method: 'GET',
      url: 'https://beverages-and-desserts.p.rapidapi.com/desserts/%7Bid%7D',
      headers: {
        'X-RapidAPI-Key': '08b5381c26msh054d91de7c0c3e5p12d313jsn5f7569645072',
        'X-RapidAPI-Host': 'beverages-and-desserts.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
        console.log("DESSERT: " , response.data);
    }).catch(function (error) {
        console.error(error);
    });
} , []);

  //-----------------------


return(<>

  <article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
  </article>





  </>);

}

export default Dessert;
