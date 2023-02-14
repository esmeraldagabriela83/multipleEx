import React , {useState , useEffect} from "react";
import '../App.css';


function Restaurant(props){

  //destructurare props
  const {propColor , propNr , propText}=props;
  console.log("props are: " , propColor , propNr , propText);

//----------------------------

const [restaurantApi , setRestaurantApi]=useState({
    location_id:"",
    name:"",
    timezone:"",
    location_string:"",
    photo:{
        images:{
            large:{
                url:""
            }
        }
    },
    price:"",
    phone:"",
    email:""
});

//----------------------

useEffect(() =>{
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': '08b5381c26msh054d91de7c0c3e5p12d313jsn5f7569645072',
    //         'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    //     }
    // };
    
    // fetch('https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng?latitude=12.91285&longitude=100.87808&limit=30&currency=USD&distance=2&open_now=false&lunit=km&lang=en_US', options)
    //     .then(response => {
    //         return(response.json());
    //     })
    //     .then(response => {
    //         console.log("restaurant response: " , response);
    //         console.log("restaurant response.data: " , response.data);
    //         console.log("restaurant response.data.length: " , response.data.length);

    //         console.log("restaurant response.data[14]: " , response.data[14]);
    //         setRestaurantApi(response.data[14]);
    //     })
    //     .catch(err => console.error(err));
} , []);

//--------------------------

return(<>

  <article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
  </article>

 
<article className="container" style={{display:"flex" , alignItems:"center" , justifyContent:"center", flexWrap:"wrap" , padding:"1em" , border:"1px solid pink"}}>

<div className="card" style={{width:"300px"}}>
  <img src={restaurantApi.photo.images.large.url} className="card-img-top" alt="restaurant-img-api"/>
  <div className="card-body">
    <h5 className="card-title">ID : {restaurantApi.location_id}</h5>
    <h5 className="card-title">Name : {restaurantApi.name}</h5>
    <h5 className="card-title">Timezone : {restaurantApi.timezone}</h5>
    <h5 className="card-title">Location : {restaurantApi.location_string}</h5>
    <h5 className="card-title">Price : {restaurantApi.price}</h5>
    <h5 className="card-title">Phone : {restaurantApi.phone}</h5>
    <h5 className="card-title">Email : {restaurantApi.email}</h5>
    <a href="https://rapidapi.com/apidojo/api/travel-advisor" target="_blank" className="btn btn-primary">restaurant rapid API</a>
  </div>
</div>

</article>


  </>);

}

export default Restaurant;
