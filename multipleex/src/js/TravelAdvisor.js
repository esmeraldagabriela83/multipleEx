import React , {useState , useEffect} from "react";
import '../App.css';

//GET attractions/list-by-latlng (Deprecated)

function TravelAdvisor(props){

  //destructurare props
  const {propColor , propNr , propText}=props;
  console.log("props are: " , propColor , propNr , propText);


  //-----------------------------

  const [travelAPI , setTravelAPI]=useState({
    address_obj:{
      city:"",
      country:"",
      postalcode:""
    },
    name:"",
    photo:{
      caption:"",
      images:{
        large:{
          url:""
        }
      }
    },
    rollup_category:{
      key:""
    }

  });

  //----------------------------

useEffect(() =>{
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '08b5381c26msh054d91de7c0c3e5p12d313jsn5f7569645072',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
  };
  
  fetch('https://travel-advisor.p.rapidapi.com/attractions/list-by-latlng?longitude=109.19553&latitude=12.235588&lunit=km&currency=USD&lang=en_US', options)
    .then(response => response.json())
    .then(response => {
      console.log("TravelAsvisor response" , response);
      console.log("TravelAsvisor response.data" , response.data);
      console.log("TravelAsvisor response.data.length" , response.data.length);
      console.log("TravelAsvisor response.data[15]" , response.data[15]);
      setTravelAPI(response.data[15]);
      console.log("TravelAsvisor response.data[15].name" , response.data[15].name);
      console.log("TravelAsvisor response.data[15].photo.caption" , response.data[15].photo.caption);
    })
    .catch(err => console.error(err));
} , []);

  //----------------------------

return(<>

  <article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
  </article>


<article className="container" style={{display:"flex" , alignItems:"center" , justifyContent:"center", flexWrap:"wrap" , padding:"1em" , border:"1px solid pink"}}>

<div className="card" style={{width:"300px"}}>
  <img src={travelAPI.photo.images.large.url} className="card-img-top" alt="RAPD-TRAVEL-ADVISOR-img"/>
  <div className="card-body">
  <h5 className="card-title" style={{color:propColor}}>Caption : {travelAPI.photo.caption}</h5>
  <h5 className="card-title">City : {travelAPI.address_obj.city}</h5>
  <h5 className="card-title">Country : {travelAPI.address_obj.country}</h5>
  <h5 className="card-title">postalcode : {travelAPI.address_obj.postalcode}</h5>
    <p className="card-text" style={{color:propColor}}>Name : <strong>{travelAPI.name}</strong></p>
    <p className="card-text">Category : <strong>{travelAPI.rollup_category.key}</strong></p>

    <a href="https://rapidapi.com/apidojo/api/travel-advisor" target="_blank"  className="btn btn-primary">travel adviser API</a>
  </div>
</div>

</article>


  </>);

}

export default TravelAdvisor;
