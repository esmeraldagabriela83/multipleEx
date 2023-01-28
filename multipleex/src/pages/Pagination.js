import React from "react";
import {Link} from "react-router-dom";
import '../App.css';


function Pagination(props){

  //destructurare props
  const {propColor , propNr , propText}=props;

return(<>

<article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
</article>

<h3 className="container">Countries</h3>

<article  className="container my-3" style={{display:"flex" , alignItems:"center" , justifyContent:"center"}}>
    <nav aria-label="Page navigation example">
    <ul className="pagination">

      

        <li className="page-item"><Link to="/page1"  className="page-link" aria-label="Previous"><span aria-hidden="true">&laquo;</span></Link></li>
      
        <li className="page-item"><Link to="/page2" className="page-link">2</Link></li>
        <li className="page-item"><Link to="/page3" className="page-link">3</Link></li>
        <li className="page-item"><Link to="/page4" className="page-link">4</Link></li>

        <li className="page-item"><Link to="/page5"  className="page-link" aria-label="Next"><span aria-hidden="true">&raquo;</span></Link></li>

    

      </ul>
  </nav>
</article>

</>);


}

export default Pagination;