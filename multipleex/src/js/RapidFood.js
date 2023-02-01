import React , {useState , useEffect} from "react";
import Axios from "axios";
import '../App.css';

//https://www.youtube.com/watch?v=Li40L8tZcaI&t=188s

function RapidFood(props){

  //destructurare props
  const {propColor , propNr , propText}=props;
  console.log("props are: " , propColor , propNr , propText);

//-----------------

const [foodText , setFoodText]=useState("");

const [foodObj , setFoodObj]=useState({
    foodId:"",
    uri:""
});

//-----------------


const options = {
  method: 'GET',
  url: 'https://edamam-food-and-grocery-database.p.rapidapi.com/parser',
  params: {ingr: 'apple'},
  headers: {
    'X-RapidAPI-Key': '08b5381c26msh054d91de7c0c3e5p12d313jsn5f7569645072',
    'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
  }
};

//-----------------------------------------------------------

const handleShowAPIfood=(event) =>{
    //event.preventDefault();
    console.log("you clicked show food api rapid");

    //-------------
    Axios.request(options).then(function (response) {
        console.log("//-----//rapidFood response.data is:" , response.data);
        //----------------------
        console.log("//-----//rapidFood response.data.text is:" , response.data.text);
        setFoodText(response.data.text);
        console.log("//-----//rapidFood response.data.parsed is:" , response.data.parsed);
        console.log("//-----//rapidFood response.data.parsed[0].food is:" , response.data.parsed[0].food);
        setFoodObj(response.data.parsed[0].food);
        console.log("//-----//rapidFood response.data.parsed[0].food.foodId is:" , response.data.parsed[0].food.foodId);
        console.log("//-----//rapidFood response.data.parsed[0].food.uri is:" , response.data.parsed[0].food.uri);
        console.log(typeof(response.data.parsed));
        console.log("//-----//rapidFood response.data.hints is:" , response.data.hints);
        console.log(typeof(response.data.hints));
        //----------------------
    }).catch(function (error) {
        console.error(error);
    })
    //-------------
}

//-----------------------------------------------------------

useEffect(() =>{
    //apel functie
    handleShowAPIfood();
},[]);

    //---------------------------------------------------------
return(<>

  <article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
  </article>


<div className="row container">

<div className="card" style={{width: "300px"}}>
  <img src={foodObj.uri} class="card-img-top" alt="rapid-food-api-img"/>
  <div className="card-body">
    <h5 className="card-title">{foodText}</h5>
    <p className="card-text">Id of food: {foodObj.foodId}</p>
    
  </div>
</div>

</div>

<button onClick={handleShowAPIfood}>Show card food rapid api</button>


  </>);

}

export default RapidFood;
