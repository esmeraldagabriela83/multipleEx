import React , {useState , useEffect} from "react";
import '../App.css';

//then(from JSON into JS obj)

function Cat(props){

  //destructurare props
  const {propColor , propNr , propText}=props;
  console.log("props are: " , propColor , propNr , propText);


  const [cat , setCat]=useState("");
  //----------------------------------

  //useEffect pt afisarea unei singure informatii la fiecare refesh al paginii
  //fetch runs only when the component mounts

//   useEffect(() =>{
//     fetch("https://catfact.ninja/fact").
//     then((response) => response.json()).then((data) => {
//         console.log("data cat is : " , data);
//         console.log(typeof(data));
//         console.log("data.fact is : " , data.fact);
//         setCat(data.fact);
//     })
//   } , [])



//---------------------------------



const handleCatInfo=(event) =>{
    // event.preventDefault();
    console.log("you clicked to show cat info");

    fetch("https://catfact.ninja/fact").
    then((response) => response.json()).then((data) => {
        console.log("data cat is : " , data);
        console.log(typeof(data));
        console.log("data.fact is : " , data.fact);
        setCat(data.fact);
    })
    
}
  //---------------------------------

  useEffect(() =>{
    handleCatInfo();
  } , [])

  //-------------------

return(<>

  <article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
  </article>


<button onClick={handleCatInfo}>Generate cat fact</button>

<p className="container">{cat}</p>

  </>);

}

export default Cat;
