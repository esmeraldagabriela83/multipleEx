import React, {useState,useEffect} from 'react';


//https://getbootstrap.com/docs/5.2/components/dropdowns/
//https://getbootstrap.com/docs/5.2/components/accordion/
//https://getbootstrap.com/docs/5.2/components/card/

function Mytext(props){

  //destructurare props
   const {propColor , propNr , propText}=props;

return(
  <section style={{padding:'1em' , margin:'1em' , border:`1px dotted ${propColor}`}}>
  <h2 style={{color:propColor}}>function component: {propText}</h2>

  <p className="text-start">Start aligned text on all viewport sizes.</p>
  <p className="text-center">Center aligned text on all viewport sizes.</p>
  <p className="text-end">End aligned text on all viewport sizes.</p>

  <p className="text-sm-start">Start aligned text on viewports sized SM (small) or wider.</p>
  <p className="text-md-start">Start aligned text on viewports sized MD (medium) or wider.</p>
  <p className="text-lg-start">Start aligned text on viewports sized LG (large) or wider.</p>
  <p className="text-xl-start">Start aligned text on viewports sized XL (extra-large) or wider.</p>


  <div className="dropdown">
    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      Dropdown button
    </button>
    <ul className="dropdown-menu">
      <li><a className="dropdown-item" href="#">Action</a></li>
      <li><a className="dropdown-item" href="#">Another action</a></li>
      <li><a className="dropdown-item" href="#">Something else here</a></li>
    </ul>
  </div>


  <p>bootstrap accordeon</p>

  <article>
  <div className="accordion" id="accordionPanelsStayOpenExample">
    <div className="accordion-item">
      <h2 className="accordion-header" id="panelsStayOpen-headingOne">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
          Accordion Item #1
        </button>
      </h2>
      <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
        <div className="accordion-body">
          <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
          Accordion Item #2
        </button>
      </h2>
      <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
        <div className="accordion-body">
          <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="panelsStayOpen-headingThree">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
          Accordion Item #3
        </button>
      </h2>
      <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
        <div className="accordion-body">
          <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
  </div>
  </article>


    <p>bootstrap card</p>

    <article id="cards_article">

    <div className="card" style={{width: '18rem'}}>
      <img src="https://images.pexels.com/photos/14523380/pexels-photo-14523380.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
           className="card-img-top"
           alt="poza-mea" style={{width:"100%"}}/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="https://images.pexels.com/photos/14523380/pexels-photo-14523380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
           target="_blank"
           className="btn btn-primary">Go somewhere</a>
      </div>
    </div>



    <div className="card" style={{width: '18rem'}}>
      <img src="https://images.pexels.com/photos/14988803/pexels-photo-14988803.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
           className="card-img-top"
           alt="poza-mea" style={{width:"100%"}}/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="https://images.pexels.com/photos/14988803/pexels-photo-14988803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
           target="_blank"
           className="btn btn-primary">Go somewhere</a>
      </div>
    </div>



    <div className="card" style={{width: '18rem'}}>
      <img src="https://images.pexels.com/photos/13265835/pexels-photo-13265835.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
           className="card-img-top"
           alt="poza-mea" style={{width:"100%"}}/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="https://images.pexels.com/photos/13265835/pexels-photo-13265835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
           target="_blank"
           className="btn btn-primary">Go somewhere</a>
      </div>
    </div>

    </article>

<p>modals</p>
    <article>

    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Launch demo modal
    </button>


    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            ...my modal content
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    </article>




  </section>
);

}
export default Mytext;
