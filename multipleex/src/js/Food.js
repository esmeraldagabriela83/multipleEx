import React, { useState , useEffect } from "react";
//import axios from "axios";
import '../App.css';

//https://www.youtube.com/watch?v=Li40L8tZcaI&t=188s

//https://rapidapi.com/edamam/api/edamam-food-and-grocery-database/

function Food(props){

  //destructurare props
  const {propColor , propNr , propText}=props;
  console.log("props are: " , propColor , propNr , propText);

//--------------------------------------
const [query , setQuery] = useState("");
const [foodContainer , setFoodContainer]=useState([]);
const [endPoint , setEndPoind]=useState("");
//--------------------------------------
useEffect(()=>{
    
    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '08b5381c26msh054d91de7c0c3e5p12d313jsn5f7569645072',
          'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
        }
      };
      
      fetch(`https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=+${query}`, options)
        .then(response => response.json())
        .then(response => {
          console.log("---food response" , response);
          console.log("---food response.hints" , response.hints);
          setFoodContainer(response.hints);
          console.log("---food response.hints.length" , response.hints.length);
        })
        .catch(err => console.error(err));

} , [endPoint])


//---------------------------------------


//-----------------------------------------

const onChangeHandler=(event) =>{
    event.preventDefault();
    setQuery(event.target.value);
}

//----------------------------


const onSubmitHandler=(event) =>{
    event.preventDefault();

    setEndPoind(query);
}

//-------------------------------




return(<>

  <article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
  </article>


<form onSubmit={onSubmitHandler}>
<label htmlFor="userRequest">Type a food :</label><br></br>
<input type="text" id="userRequest" value={query} onChange={onChangeHandler}/><br></br>

<button type="submit">submit food</button>

</form>

<article className="container" style={{display:"flex" , alignItems:"center" , justifyContent:"center", flexWrap:"wrap" , padding:"1em" , border:"1px solid green"}}>
  {foodContainer.map((dish , index) =>{
    //map are intotdeauna return
    return(<>
       
       <div key={index} className="card" style={{width: "300px" , padding:"1em" , margin:"1em"}}>
      <img src={dish.food.image} className="card-img-top" alt="dish-img"/>
      <div className="card-body">
        <h5 className="card-title">Category : {dish.food.category} <strong>Label : {dish.food.label}</strong></h5>
        <h5 className="card-title">Label : {dish.food.label}</h5>
        <p className="card-text">ENERC_KCAL : {dish.food.nutrients.ENERC_KCAL}</p>
        <p className="card-text">FAT : {dish.food.nutrients.FAT}</p>
        <p className="card-text"></p>
        <a href="https://rapidapi.com/edamam/api/edamam-food-and-grocery-database/" target="_blank" className="btn btn-primary">rapid API</a>
      </div>
    </div>
    </>);
  })}
</article>

  </>);

}

export default Food;
