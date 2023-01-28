import React from "react";
import '../App.css';


function Page2(props){

  //destructurare props
  const {propColor , propNr , propText}=props;
  console.log("props are: " , propColor , propNr , propText);


return(<>

  <article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
  </article>

<article className="container bg-dark">
  <h1 style={{color:propColor}}>country 2 Page2</h1>

<h2 style={{color:propColor}}>Why do we use it?</h2>

<p style={{color:propColor}}>
2 There are many variations of passages of Lorem Ipsum available,<br></br> but the majority have suffered alteration in some form, 
by injected humour, or randomised words which don't look even slightly believable.
 If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.<br></br>
  All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.<br></br>
   It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
 The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
</p>
</article>

  </>);

}

export default Page2;
