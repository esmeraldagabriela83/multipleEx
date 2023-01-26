import React, {useState} from "react";
import '../App.css';
//import '../styles/NavbarPedro.scss';

function NavbarPedro(props){

  //destructurare props
  const {propColor , propNr , propText}=props;
  console.log("props are: " , propColor , propNr , propText);


return(<>

  <article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
  </article>


<nav className="navbar">
    <a href="#" style={{textDecoration:'none'}} id="logoPedroNav">pedro logo tutorial</a>
<ul className="links" style={{display:"flex" , listStyleType: 'none'}}>
<li><a href="#">page1</a></li>
<li><a href="#">page2</a></li>
<li><a href="#">page3</a></li>
<li><a href="#">page4</a></li>
</ul>
</nav>


  </>);

}

export default NavbarPedro;
