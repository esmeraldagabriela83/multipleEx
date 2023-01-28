import React, {useState} from "react";
import dataItem from "./mock-data.json";

import '../App.css';

const BuyItem=(props) =>{
    //destructurare props
    const {propColor , propNr , propText}=props;
    console.log("props are: " , propColor , propNr , propText);
  
    //--------------------------
  
    const [items , setItems]=useState(dataItem);
  
   return(<>

<article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
</article>


      <div  className="container" style={{display:"flex" , alignItems:"center" , justifyContent:"center", flexWrap:"wrap"}}>
        {items.map((item , index) =>{
          //map are intotdeauna return
          return(<>
  
            
              <div key={index}>
  
                <div className="card my-3 mx-2" style={{width: "300px" , border:`1px solid ${propColor}`}}>
                  <img src={item.imgItem} className="card-img-top img-fluid" alt="item-photo"/>
                    <div className="card-body">
                      <h5 className="card-title">{item.id} . {item.name}</h5>
                      <p className="card-text">{item.itemDetails}</p>
                      <a href="https://www.lipsum.com/" target="_blank" className="btn btn-primary">{item.price}</a>
                    </div>
                </div>
  
              </div>
          
          
        </>);
        })}
      </div>
  
   </>);
  
  }

  export default BuyItem;
