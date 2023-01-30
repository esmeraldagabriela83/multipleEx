import React , {useState} from "react";
import '../App.css';


const paragraphLorem="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

const paragraphLoremMore="It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

function ShowHide(props){

  //destructurare props
  const {propColor , propNr , propText}=props;
  console.log("props are: " , propColor , propNr , propText);

  //------------------------------
//1
  const [colorTitle , setColorTitle]=useState("red");

  //1 sec
  const [paragraphMore , setParagraphMore]=useState("");
 
  //2
     const [textColor , setTextColor]=useState("red");

  
//3
  const [showText , setShowText]=useState(false);



  //----------------------------------on btn:functie anonima sau functia inline

return(<>

  <article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
    <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>

    <button onClick={(event) => {alert("Hey !")}}>show pedro alert</button><br></br>

    <button onClick={(event) => {console.log("you clicked to display in console")}}>show in console</button><br></br>

  </article>

  <article className="container" style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
    <h3>1</h3>
    <button onClick={(event) => setColorTitle("green")}>change text color once</button>

    <h1 style={{color:colorTitle}}>title text</h1>
  </article>


  <article className="container" style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
    <h3>1 sec</h3>

    <p style={{color:propColor}}>{paragraphLorem}<br></br>{paragraphMore}</p>
    <button onClick={(event) => setParagraphMore(paragraphLoremMore)}>More info</button>

  </article>


  <article className="container" style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
    <h3>2</h3>
    <button onClick={(event) => setTextColor(textColor === "red" ? "green" : "red")}>toggle text color</button>

    <h1 style={{color:textColor}}>toggle text color</h1>
    </article>


<article className="container" style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
    <h3>3</h3>

    {showText === true && <h3 style={{color:propColor}}>short if / if ternaey operator</h3>}
    {showText && <h3 style={{color:propColor}}>short if / if ternaey operator</h3>}

    <button onClick={(event) =>setShowText(!showText)}>show/hide</button>


    {showText === true && <div>
        <h1>content .....</h1>
        <img src="./images/cake.jpg" alt="cake-img" style={{width:"30%"}} />
        <p style={{color:propColor}}>{paragraphLorem}</p>
        </div>}

</article>




  </>);

}

export default ShowHide;
