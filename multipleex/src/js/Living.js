import React, { useState , useEffect } from "react";
import '../App.css';


function Living(props){

  //destructurare props
  const {propColor , propNr , propText}=props;
  console.log("props are: " , propColor , propNr , propText);

//---------------------------

const [citiesArr , setCitiesArr]=useState([]);


  //------------------------------


  useEffect(() =>{
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': '08b5381c26msh054d91de7c0c3e5p12d313jsn5f7569645072',
    //         'X-RapidAPI-Host': 'webcamstravel.p.rapidapi.com'
    //     }
    // };
    
    // fetch('https://webcamstravel.p.rapidapi.com/webcams/list/nearby=%7Blat%7D,%7Blng%7D,%7Bradius%7D?lang=en&show=webcams%3Aimage%2Clocation', options)
    //     .then(response => response.json())
    //     .then(response => {
    //         console.log("webcams : ", response);
    //         console.log("webcams.status : ", response.status);
    //         console.log("webcams.result : ", response.result);
    //         console.log("webcams.result : ", response.result);
    //         console.log("webcams.result.webcams : ", response.result.webcams);
    //         console.log("webcams.result.webcams.length : ", response.result.webcams.length);
    //         setCitiesArr(response.result.webcams);
    //     })
    //     .catch(err => console.error(err));
  } , []);


  //------------------------------

return(<>

  <article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
  </article>

  

  <article className="container" style={{display:"flex" , alignItems:"center" , justifyContent:"center", flexWrap:"wrap" , padding:"1em" , border:"1px solid green"}}>

     {citiesArr.map((city , index) =>{
        //map are intotdeauna filter
        return(<>
        <div key={index} className="card" style={{width: "300px" , margin:"1em"}}>
  <img src={city.image.current.preview} className="card-img-top" alt="img-city-api"/>
  <div className="card-body">
    <h5 className="card-title">{city.title}</h5>
    <h5 className="card-title">City : {city.location.city}</h5>
    <h5 className="card-title">Continent : {city.location.continent}</h5>
    <h5 className="card-title">Continent_code : {city.location.continent_code}</h5>

    <h5 className="card-title">Country : {city.location.country}</h5>
    <h5 className="card-title">Country_code : {city.location.country_code}</h5>
    <h5 className="card-title">Region : {city.location.region}</h5>
    <h5 className="card-title">Timezone : {city.location.timezone}</h5>
    <a href="https://rapidapi.com/webcams.travel/api/webcams-travel/" target="_blank" className="btn btn-primary">rapid API</a>
  </div>
</div>
        </>);
     })}

  </article>





  </>);

}

export default Living;
