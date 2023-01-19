import React, {useState} from "react";
import '../App.css';

//https://getbootstrap.com/docs/5.2/components/card/
//https://icons.getbootstrap.com/

//variables for propText
const text1="Contrary to popular belief,Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.";

const text2="All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures.";

const text3="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.";


function Boxes(props){
  
  //destructurare props
  const {propColor , propNr , propText}=props;
  console.log("props are: " , propColor , propNr , propText);

return(<>

  <article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
  </article>

  <section className="p-5">

    <div className="container">

      <div className="row text-center g-3">

          <div className="col-md">
          <div className="card bg-primary text-light">

          <div className="card-body text-center">
          <div className="h1 mb-3"><i className="bi bi-bicycle"></i></div>
          <h3 className="card-title mb-3">Virtual</h3>
          <p className="card-text mb-3">{text1}</p>
          <a href="#wikypedia" className="btn btn-dark">Travel the country on bicycle</a>
          </div>

          </div>
          </div>


          <div className="col-md">
          <div className="card bg-warning text-light">

          <div className="card-body text-center">
          <div className="h1 mb-3"><i className="bi bi-brightness-high"></i></div>
          <h3 className="card-title mb-3">Sunlight</h3>
          <p className="card-text mb-3">{text2}</p>
          <a href="#wikypedia" className="btn btn-primary">Sunlight can harm</a>
          </div>

          </div>
          </div>



          <div className="col-md">
          <div className="card bg-secondary text-light">

          <div className="card-body text-center">
          <div className="h1 mb-3"><i className="bi bi-camera-fill"></i></div>
          <h3 className="card-title mb-3">Take photos</h3>
          <p className="card-text mb-3">{text3}</p>
          <a href="#wikypedia" className="btn btn-dark">Sunlight can harm</a>
          </div>

          </div>
          </div>




      </div>

    </div>

  </section>

  </>);

}

export default Boxes;
