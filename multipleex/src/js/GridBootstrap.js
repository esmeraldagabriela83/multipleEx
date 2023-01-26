import React, {useState} from "react";
import '../App.css';



function GridBootstrap(props){

  //destructurare props
  const {propColor , propNr , propText}=props;
  console.log("props are: " , propColor , propNr , propText);

  return(<>
  
  
  <article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
  </article>

<article id="grid_bootstrap_id">
  <div className="container text-center">

    <div className="row">
        <div className="col my-1">1</div>
        <div className="col my-1">2</div>
    </div>

    <div className="row">
        <div className="col-sm my-1">1-sm</div>
        <div className="col-sm my-1">2-sm</div>
    </div>

    <div className="row">
        <div className="col-md my-1">1-md</div>
        <div className="col-md my-1">2-md</div>
    </div>

  </div>

    <div className="row">

        <div className="col">
        col 1 of 3
        </div>
        <div className="col">
        col 2 of 3
        </div>
        <div className="col">
        col 3 of 3
        </div>
        
    </div>


    <div className="row">

        <div className="col-sm">
        col-sm 1 of 3
        </div>
        <div className="col-sm">
        col-sm 2 of 3
        </div>
        <div className="col-sm">
        col-sm 3 of 3
        </div>

    </div>


    <div className="row">

        <div className="col-md">
        col-md 1 of 3 train
        </div>
        <div className="col-md">
        col-md 2 of 3 car
        </div>
        <div className="col-md">
        col-md 3 of 3 plain
        </div>

     </div>


     
    <div className="row">

        <div className="col-md-6 col-lg-3">
        col 1 of 4 / instructor 1
        </div>
        <div className="col-md-6 col-lg-3">
        col 2 of 4/ instructor 2
        </div>
        <div className="col-md-6 col-lg-3">
        col 3 of 4 / instructor 3
        </div>
        <div className="col-md-6 col-lg-3">
        col 4 of 4 / instructor 4
        </div>

    </div>

    <div className="row">
        <div className="col-lg-8">col-lg-8</div>
        <div className="col-lg-4">col-lg-4</div>
    </div>

    <div className="row">
        <div className="col-lg-8">
          <img src="/images/copy.jpg" className="img-fluid" alt="copy_sky_img"/>
        </div>
        <div className="col-lg-4">
            <h3>
            Fancy display heading<br></br>
            <small className="text-muted">With faded secondary text</small>
            </h3>

            <h1 className="display-6">Display 6 title</h1>

            <p className="lead">
            lead paragraph / This is a lead paragraph. It stands out from regular paragraphs.
            </p>

            <p><small>paragraph tag / small tag This is a lead paragraph. It stands out from regular paragraphs.</small></p>

            <button type="button" className="btn btn-secondary m-1">Secondary</button><br></br>
            <button type="button" className="btn btn-danger">Danger</button>
        </div>
    </div>



    <div className="row">
        <div className="col-8">

                <p>
        <a className="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
            Link with href
        </a>
        <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            Button with data-bs-target
        </button>
        </p>
        <div className="collapse" id="collapseExample">
        <div className="card card-body">
            1 Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
        </div>
        </div>

        </div>
    <div className="col-4">
        <img src="/images/tort-ciocolata.jpg" className="img-fluid" alt="tort_ciocolata_img"/>
    </div>
  </div>




  
  <div className="row">
        <div className="col-8">

        <p>
  <a className="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first element</a>
  <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Toggle second element</button>
  <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both elements</button>
</p>
<div className ="row">
  <div className="col">
    <div className="collapse multi-collapse" id="multiCollapseExample1">
      <div className="card card-body">
        1 Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
      </div>
    </div>
  </div>
  <div className="col">
    <div className="collapse multi-collapse" id="multiCollapseExample2">
      <div className="card card-body">
        2 Some placeholder content for the second collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
      </div>
    </div>
  </div>
</div>

        </div>
    <div className="col-4">
        <img src="/images/coffee.jpg" className="img-fluid" alt="coffee_img"/>
    </div>
  </div>



</article>

  </>);

}

export default GridBootstrap;