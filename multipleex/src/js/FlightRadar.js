import React , {useState , useEffect} from "react";
import '../App.css';

//https://rapidapi.com/apidojo/api/flight-radar1/

function FlightRadar(props){

  //destructurare props
  const {propColor , propNr , propText}=props;
  console.log("props are: " , propColor , propNr , propText);

  //---------------------------------------
const [flights , setFlights]=useState();
  //----------------------------------------

useEffect(() =>{
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': '08b5381c26msh054d91de7c0c3e5p12d313jsn5f7569645072',
    //         'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
    //     }
    // };
    
    // fetch('https://flight-radar1.p.rapidapi.com/aircrafts/list', options)
    //     .then(response => response.json())
    //     .then(response => {
    //         console.log("FlightRadar response is : " , response);
    //         console.log("FlightRadar response.rows is : " , response.rows);
    //         setFlights(response.rows);
    //     })
    //     .catch(err => console.error(err));
} , []);

  //----------------------------------------

return(<>

  <article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
  </article>

 
<article className="container" style={{display:"flex" , alignItems:"center" , justifyContent:"center", flexWrap:"wrap" , padding:"1em" , border:"1px solid brown"}}>



{flights.map((flight , index) =>{
    //map are intotdeauna return
    return(<>
    
    <div key={index} className="card" style={{margin:"0.5em"}}>
    <div className="card-body">
        <h5 className="card-title">{flight.models[0].Name}</h5>
        <h5 className="card-title" style={{color:propColor , fontWeight:"bold"}}>{flight.models[0].Code}</h5>
        <p className="card-text">{flight.description}</p>
        <a href="https://rapidapi.com/apidojo/api/flight-radar1/" target="_blank" className="btn btn-primary">rapid API</a>
    </div>
    </div>
    
    </>);
})}

</article>


  </>);

}

export default FlightRadar;
