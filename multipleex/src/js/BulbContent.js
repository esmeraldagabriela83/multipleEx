import React , {useState} from "react";
import Page2 from "../pages/Page2.js";
import Page3 from "../pages/Page3.js";
import '../App.css';

const text1="lorem 1 content";
const src1="./images/plate.jpg";

const text2="lorem 2 content";
const src2="./images/coffee.jpg";

function BulbContent(props){

  //destructurare props
  const {propColor , propNr , propText}=props;
  console.log("props are: " , propColor , propNr , propText);

  //---------------------------------
//discord 16.05 2022 grup general

const style2 = {
  border:"solid #333 3px",
  padding:"1em"
}

//---------------------------------

const [bulbState,setBulbState] = useState(true);



const handleClick=(event , statusParam) =>{
  event.preventDefault();
  console.log("event",event.target);
  //------------
  console.log("status bulb: ", statusParam);
  setBulbState(statusParam);

  //---------------


}

  //----------------------------------

return(<>

  <article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
  </article>


<div className="container" style={{...style2, backgroundColor:(bulbState ? "yellowgreen" : "pink")}}>

<p>{bulbState ? text1 : text2}</p>
<img src={bulbState ? src1 : src2} alt="bulb_state_img" style={{width:"20%"}}/>

{bulbState ? <Page2  propColor={"yellowgreen"} propNr={123} propText={"Page2"}/> : <Page3  propColor={"pink"} propNr={321} propText={"Page3"}/>}

</div>

<button onClick={(event) => handleClick(event , !bulbState)}>{bulbState ? "On plate" : "Off coffee"}</button>


  </>);

}

export default BulbContent;
