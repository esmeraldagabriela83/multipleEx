import React from "react";
import '../App.css';


function Page4(props){

  //destructurare props
  const {propColor , propNr , propText}=props;
  console.log("props are: " , propColor , propNr , propText);


return(<>

  <article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
  </article>

<article className="container bg-warning">
  <h1>country 4 Page4</h1>

<h2>Why do we use it?</h2>

<p style={{color:propColor}}>
4 The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.<br></br> 
Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, 
accompanied by English versions from the 1914 translation by H. Rackham.
</p>
</article>

  </>);

}

export default Page4;
