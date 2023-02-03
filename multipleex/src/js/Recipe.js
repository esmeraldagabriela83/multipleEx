import React, { useState , useEffect } from "react";
import axios from "axios";
import '../App.css';


function Recipe(props){

  //destructurare props
  const {propColor , propNr , propText}=props;
  console.log("props are: " , propColor , propNr , propText);

//---------------------------------
const [recipe , setRecipe]=useState([]);
//-----------------------------------



//-----------------------------------

useEffect(()=>{
  const options = {
    method: 'GET',
    url: 'https://low-carb-recipes.p.rapidapi.com/search',
    params: {
      name: 'cake',
      tags: 'keto;dairy-free',
      includeIngredients: 'egg;butter',
      excludeIngredients: 'cinnamon',
      maxPrepareTime: '10',
      maxCookTime: '20',
      maxCalories: '500',
      maxNetCarbs: '5',
      maxSugar: '3',
      maxAddedSugar: '0',
      limit: '10'
    },
    headers: {
      'X-RapidAPI-Key': '08b5381c26msh054d91de7c0c3e5p12d313jsn5f7569645072',
      'X-RapidAPI-Host': 'low-carb-recipes.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
      console.log("...response.data is: " , response.data);
      console.log("...response.data.length is: " , response.data.length);
      setRecipe(response.data[0]);

      console.log("...response.data.ingredients is: " , response.data[0].ingredients);
      console.log("...response.data.ingredients.length is: " , response.data[0].ingredients.length);//8

      for(let i=0 ; i<response.data[0].ingredients.length ; i++){
          console.log(response.data[0].ingredients[i].servingSize);
      }

      
      
  }).catch(function (error) {
      console.error(error);
  });


} , []);

//----------------------

return(<>

  <article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
  </article>

    <article className="container" style={{display:"flex" , alignItems:"center" , justifyContent:"center"}}>
        
            <div className="card" style={{width: "100%"}}>
            <img src={recipe.image} className="card-img-top" alt="recipe_img"/>
                <div class="card-body">
                    <h5 className="card-title">{recipe.name}</h5>

                    <p className="card-text">{recipe.description}</p>

                    {/* <p className="card-text">Alcohol {recipe.nutrients.alcohol}</p>
                    <p className="card-text">Gluten {recipe.nutrients.gluten}</p>
                    <p className="card-text">PrepareTime {recipe.prepareTime} hours . </p>

                    <p className="card-text">Steps : {recipe.steps.join(" // ")}</p>
                    <p className="card-text">Tags : {recipe.tags.join(" /// ")}</p>

                    

                    {recipe.ingredients.map((ingredient , index) =>{
                        //map are intotdeauna return
                        return(<>
                        <div key={index} style={{border:`1px solid ${propColor}`}}>

                        <h5 className="card-title">{ingredient.name}</h5>
                        <p className="card-text">Units : {ingredient.servingSize.units}</p>
                        <p className="card-text">Desc: {ingredient.servingSize.desc}</p>
                        <p className="card-text">Qty : {ingredient.servingSize.qty}</p>
                        <p className="card-text">Scale : {ingredient.servingSize.scale}</p>
                        </div>
                        </>);
                    })} */}
                    

                    <a href="https://rapidapi.com/dfskGT/api/low-carb-recipes/" target="_blank" className="btn btn-primary">Source Rapid API</a>
                </div>
            </div>

            
    
    </article>

  </>);

}

export default Recipe;
