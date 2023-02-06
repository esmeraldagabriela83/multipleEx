import React , {useState , useEffect} from "react";
import '../App.css';

//https://rapidapi.com/letscrape-6bRBa3QguO5/api/local-business-data/

function LocalBusiness(props){

  //destructurare props
  const {propColor , propNr , propText}=props;
  console.log("props are: " , propColor , propNr , propText);

  //--------------------
  const [busnesses , setBusnesses]=useState([]);
  //------------------------
  useEffect(() =>{
  //   const options = {
  //       method: 'GET',
  //       headers: {
  //           'X-RapidAPI-Key': '08b5381c26msh054d91de7c0c3e5p12d313jsn5f7569645072',
  //           'X-RapidAPI-Host': 'local-business-data.p.rapidapi.com'
  //       }
  //   };
    
  //   fetch('https://local-business-data.p.rapidapi.com/search?query=hotels%20in%20san%20francisco&limit=20&lat=37.359428&lng=-121.925337&zoom=13&region=us&language=en', options)
  //       .then(response => response.json())
  //       .then(response => {
  //           console.log("business response: " , response);
  //           console.log("business response.data: " , response.data);
  //           console.log("business response.data.length: " , response.data.length);
  //           setBusnesses(response.data);
  //       })
  //       .catch(err => console.error(err));
  } , []);
  //------------------------

return(<>

  <article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
  </article>


<article className="container" style={{display:"flex" , alignItems:"center" , justifyContent:"center", flexWrap:"wrap" , padding:"1em" , border:"1px solid green"}}>

    //continue in next project

{busnesses.map((business , index) =>{
    //map are intotdeauna return
    return(<>
    <div key={index} class="card" style={{width:"300px"}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="https://rapidapi.com/letscrape-6bRBa3QguO5/api/local-business-data/" target="_blank" className="btn btn-primary">rapid API</a>
  </div>
</div>
    </>);
})}

</article>


  </>);

}

export default LocalBusiness;
