import React, {useState,useEffect} from 'react';
import '../styles/Mytext.scss';

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
      <li><a className="dropdown-item" href="#learn">learn</a></li>
      <li><a className="dropdown-item" href="#instructors">Instructors</a></li>
      <li><a className="dropdown-item" href="#questions">FAQ</a></li>
    </ul>
  </div>



  <article id="mytext_article">
<h3>The standard Lorem Ipsum passage, used since the 1500s</h3>

<p>
On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized 
by the charms of pleasure of the moment, 
so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; 
and equal blame belongs to those who fail in their duty through weakness of will, 
which is the same as saying through shrinking from toil and pain. 
These cases are perfectly simple and easy to distinguish. 
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
</p>

<button>Click here 1</button>

<h3>Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</h3>

<p>
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
 quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, 
 id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, 
 cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, 
 omnis dolor repellendus. 
 Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et
  molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
 ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
</p>

<button>Click here 2</button>

<h3>1914 translation by H. Rackham</h3>

<p>
"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized 
by the charms of pleasure of the moment, 
so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; 
and equal blame belongs to those who fail in their duty through weakness of will, 
which is the same as saying through shrinking from toil and pain. 
These cases are perfectly simple and easy to distinguish. 
In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, 
every pleasure is to be welcomed and every pain avoided. 
But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur 
that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection:
 he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
</p>

<button>Click here 3</button>

</article>



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
