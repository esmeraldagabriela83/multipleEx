import {Link} from "react-router-dom";
import '../App.css';



export const PedroNav=(props) =>{

  //destructurare props
  const {propColor , propNr , propText}=props;

    return(<>

<article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
  </article>

        <nav>
  <Link to="/">Home</Link>
  <Link to="/about">About</Link>
  <Link to="/info">Info</Link>
  <Link to="/contact">Contact</Link>
</nav>
        </>);
};