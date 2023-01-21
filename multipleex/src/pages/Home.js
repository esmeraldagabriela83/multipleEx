import React, {useState} from "react";
import '../App.css';


function Home(props){

  //destructurare props
  const {propColor , propNr , propText}=props;
  console.log("props are: " , propColor , propNr , propText);


return(<>

  <article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
  </article>


  <h1>home page</h1>

<h2>Why do we use it?</h2>

<p>
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', 
making it look like readable English. 
Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, 
and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, 
sometimes by accident, sometimes on purpose (injected humour and the like).
</p>

  </>);

}

export default Home;
