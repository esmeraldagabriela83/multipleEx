import React from "react";
import '../App.css';


function Footer(props){

  //destructurare props
  const {propColor , propNr , propText}=props;
  console.log("props are: " , propColor , propNr , propText);


return(<>

  <article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
  </article>

  <footer className="p-5 bg-dark text-white position-relative">

    <div className="container">
    <p className="lead">Copyright &copy; 2022 Frontend Portfolio App</p>
    <a href="#" className="position-absolute bottom-0 end-0 p-5"><i className="bi bi-arrow-up-circle h1"></i></a>
    </div>

  </footer>



  </>);

}

export default Footer;
