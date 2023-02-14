import React , {useState , useEffect} from "react";
import axios from "axios";
import '../App.css';

//https://www.youtube.com/watch?v=Li40L8tZcaI&t=188s
//https://rapidapi.com/apidojo/api/tasty/

function Tasty(props){

  //destructurare props
  const {propColor , propNr , propText}=props;
  console.log("props are: " , propColor , propNr , propText);

//----------------------------------------------------

const [tastyFood , setTastyFood]=useState([]);

//------------------------------------------------------

useEffect(() =>{

    // const options = {
    //     method: 'GET',
    //     url: 'https://tasty.p.rapidapi.com/recipes/auto-complete',
    //     params: {prefix: 'chicken soup'},
    //     headers: {
    //       'X-RapidAPI-Key': '08b5381c26msh054d91de7c0c3e5p12d313jsn5f7569645072',
    //       'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    //     }
    //   };
      
    //   axios.request(options).then(function (response) {
    //       console.log("tasty response.data is : " , response.data);
    //       console.log("tasty response.data.results is : " , response.data.results);
    //       setTastyFood(response.data.results);
    //       console.log("tasty response.data.results.length is : " , response.data.results.length);
    
    //     for(let i=0 ; i<response.data.results.length ; i++){
    //         console.log("///type: " , response.data.results[i].type);
    //         console.log("///display: " , response.data.results[i].display);
    //         console.log("///search_value: " , response.data.results[i].search_value);
    //     }
    
    //   }).catch(function (error) {
    //       console.error(error);
    //   });

}, []);

//-----------------------------------------------------
return(<>

  <article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
  </article>

{tastyFood.map((eachTastyFood , index) =>{
    //map are intotdeauna return
    return(<>
    <article key={index} style={{border:`1px solid ${propColor}` , margin:"1em"}}>
        <p>type is : {eachTastyFood.type}</p>
        <p>display is : {eachTastyFood.display}</p>
        <p>search_value is : {eachTastyFood.search_value}</p>
    </article>
    </>);
})}




  </>);

}

export default Tasty;
