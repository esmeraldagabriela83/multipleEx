import React, {useState} from "react";
import '../App.css';

//https://www.youtube.com/watch?v=4sosXZsdy-s
//Live demo
//https://getbootstrap.com/docs/5.2/components/modal/


function Modal(props){

      //destructurare props
  const {propColor , propNr , propText}=props;
  console.log("props are: " , propColor , propNr , propText);

 
  //------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    return(<>
    
    <article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
  </article>



  <div className="modal fade" id="enroll" tabIndex="-1" aria-labelledby="enrollmentLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="enrollmentLabel">React portfolio app with bootstrap</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">




 MODAL INFO....


      </div>

      <div className="modal-footer">
  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
  <button type="BUTTON" className="btn btn-primary">SAVE</button>
</div>

    </div>
  </div>
</div>



    </>);

}


export default Modal;