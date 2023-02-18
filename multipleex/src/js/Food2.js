import React , {useState , useEffect} from "react";
import '../App.css';


function Food2(props){

  //destructurare props
  const {propColor , propNr , propText}=props;
  console.log("props are: " , propColor , propNr , propText);

  //--------------------------------

  const [query , setQuery]=useState("");

  const [food2Container , setFood2Container]=useState([]);

  const [endPoint2 , setEndPoint2]=useState("");

  //---------------------------

useEffect(() =>{
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': '08b5381c26msh054d91de7c0c3e5p12d313jsn5f7569645072',
    //         'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
    //     }
    // };
    
    // fetch(`https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=+${query}`, options)
    //     .then(response => {
    //         return(response.json());
    //     })
    //     .then(data => {
    //         console.log("---food2 data ; " , data);
    //         console.log("----food2 data.hints ; " , data.hints);
    //         console.log("---food2 data.hints.length ; " , data.hints.length);
    //         setFood2Container(data.hints);
    //     })
    //     .catch(err => console.error(err));
} , [endPoint2]);

  //---------------------------
const onChangeHandlerFood2=(event) =>{
    event.preventDefault();
    setQuery(event.target.value);
    console.log(query);
}
  //-------------------------------------------------

  const onSubmitHandler2=(event) =>{
    event.preventDefault();
    setEndPoint2(query);
  }

  //-------------------------------------------------------

return(<>

  <article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
  </article>


<form onSubmit={onSubmitHandler2}>

    <label htmlFor="123Food2">Write food name:</label><br></br>
    <input type="text" name="food2" id="123Food2" value={query} onChange={onChangeHandlerFood2}/><br></br>
    <button>Submit food2</button>

</form>

 
<article className="container" style={{display:"flex" , alignItems:"center" , justifyContent:"center", flexWrap:"wrap" , padding:"1em" , border:"1px solid pink"}}>

{food2Container.map((item , index) =>{
    //map are intotdeauna return
    return(<>
    <div key={index} className="card" style={{width:"300px" , margin:"0.5em"}}>
  <img src={item.food.image} className="card-img-top" alt="item-rapid-api-img"/>
  <div className="card-body">
    <h5 className="card-title">{item.food.label}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="https://rapidapi.com/edamam/api/edamam-food-and-grocery-database" target="_blank" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </>);
})}

</article>


  </>);

}

export default Food2;
