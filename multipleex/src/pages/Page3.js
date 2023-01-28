import React from "react";
import '../App.css';


function Page3(props){

  //destructurare props
  const {propColor , propNr , propText}=props;
  console.log("props are: " , propColor , propNr , propText);


return(<>

  <article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
  </article>

<article className="container bg-dark">
  <h1 style={{color:propColor}}>country 3 Page3</h1>

<h2 style={{color:propColor}}>Why do we use it?</h2>

<p style={{color:propColor}}>
3 Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. <br></br>
This book is a treatise on the theory of ethics, very popular during the Renaissance.<br></br> 
The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
</p>
</article>

  </>);

}

export default Page3;
