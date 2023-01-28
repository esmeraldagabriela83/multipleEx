
import React, {useState} from "react";
import {BrowserRouter as Router , Routes , Route , Link} from "react-router-dom";


import './App.css';
// import logo from './logo.svg';
//https://www.youtube.com/watch?v=f55qeKGgB_M&t=616s

import Mytext from "./js/Mytext.js";
import Carusel from "./js/Carusel.js";
import MyNav from "./js/MyNav.js";
import Nav2 from "./js/Nav2.js";
import Showcase from "./js/Showcase.js";
import Newsletter from "./js/Newsletter.js";
import Boxes from "./js/Boxes.js";
import LearnSection from "./js/LearnSection.js";
import LearnSection2 from "./js/LearnSection2.js";
import QuestionAccordion from "./js/QuestionAccordion.js";
import ContactDetails from "./js/ContactDetails.js";
import Instructors from "./js/Instructors.js";

import Modal from "./js/Modal.js";

import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Info from "./pages/Info.js";
import Contact from "./pages/Contact.js";
import {PedroNav} from "./pages/PedroNav.js";
import NavFinal from "./pages/NavFinal.js";



import NavbarPedro from "./pages/NavbarPedro.js";
import MainPage from "./pages/MainPage.js";
import GridBootstrap from "./js/GridBootstrap.js";
import TableBootstrap from "./js/TableBootstrap.js";
import BuyItem from "./js/BuyItem.js";
import Persons from "./js/Persons.js";



import Page1 from "./pages/Page1.js";
import Page2 from "./pages/Page2.js";
import Page3 from "./pages/Page3.js";
import Page4 from "./pages/Page4.js";
import Page5 from "./pages/Page5.js";
import Pagination from "./pages/Pagination.js";

import Footer from "./js/Footer.js";




import "./styles/main.scss";




const pedroText="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.";
const pedroImg="./images/bicycle.jpg";


const name=<h3>Pedro</h3>;
const age=<p>45</p>;
const imgPhoto="./images/crop-bostan.jpg";
const email="bostan@yahoo.com";

//-----------------------

const user=(
  <article className="container my-3" style={{border:"1px solid indigo"}}>
    {name}
    {age}
    <div className="container">
      <img src={imgPhoto} className="rounded mx-auto d-block img-fluid" alt="towel_CENTER_PEDRO_IMG" style={{width:"30vw"}}/>
    </div>
   {email}
  </article>
);

//---------------------------------

const User=(props) =>{

//destructurare obj props
const {propColor , propNr , propText}=props;

return(<>
<article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
</article>

<div className="container">
    Name: {name}
    Age: {age}
    <div className="container">
      <img src={imgPhoto} className="rounded mx-auto d-block img-fluid" alt="towel_CENTER_PEDRO_IMG" style={{width:"30vw"}}/>
    </div>
    Email: {email}
</div>

</>);

}

//------------------------------

const User2=(props) =>{

//destructurare obj props
const {propColor , propName , propImg, propAge, propEmail , propText}=props;

return(<>


    <h1 style={{color:propColor , border:`1px solid ${propColor}` , padding:'0.5em'}}>{propName}</h1>
    
    <div className="container">
      <img src={propImg} className="rounded mx-auto d-block img-fluid" alt="towel_CENTER_PEDRO_IMG" style={{width:"30vw"}}/>
    </div>

    <p style={{border:`1px solid ${propColor}` , padding:'0.5em'}}>{propAge}</p>
    <p style={{border:`1px solid ${propColor}` , padding:'0.5em'}}>{propEmail}</p>
    <p style={{border:`1px solid ${propColor}` , padding:'0.5em'}}>{propText}</p>

</>);

}

//----------------------------------------------

const userSpEDRO=[
  {name:"Jeni" , age:78},
  {name:"Ana" , age:98},
  {name:"Costache" , age:38},
  {name:"Zoe" , age:56},
];


//--------------------------------------------------------

const planets=[
  {name:"Mars" , isGasPlanet:false},
  {name:"Earth" , isGasPlanet:false},
  {name:"Jupiter" , isGasPlanet:true},
  {name:"Venus" , isGasPlanet:false},
  {name:"Neptun" , isGasPlanet:true},
  {name:"Uranius" , isGasPlanet:true},
];

//(time < 18) ? printf("Good day.") : printf("Good evening.");
//https://www.w3schools.com/c/c_conditions_short_hand.php

//----------------------------------------

function App() {
  return (
    <section className="App">

    <Mytext propColor={"deeppink"} propNr={72} propText={"Mytext"}/>
    <Carusel propColor={"peru"} propNr={79} propText={"Carusel"}/>
    <MyNav propColor={"DarkGoldenRod"} propNr={89} propText={"MyNav"}/>
    <Nav2 propColor={"DarkViolet"} propNr={49} propText={"Nav2"}/>
    <Showcase propColor={"LightCoral"} propNr={29} propText={"Showcase"}/>
    <Newsletter propColor={"MediumSpringGreen"} propNr={29} propText={"Newsletter"}/>
    <Boxes propColor={"Chocolate"} propNr={29} propText={"Boxes"}/>
    <LearnSection propColor={"DarkGoldenRod"} propNr={99} propText={"LearnSection"}/>
    <LearnSection2 propColor={"DarkGoldenRod"} propNr={99} propText={"LearnSection2"}/>
    <QuestionAccordion propColor={"MediumVioletRed"} propNr={99} propText={"QuestionAccordion"}/>
    <Instructors propColor={"MediumSeaGreen"} propNr={23} propText={"Instructors"}/>
    <ContactDetails propColor={"green"} propNr={72} propText={"ContactDetails"}/>

    <Modal propColor={"yellow"} propNr={34} propText={"Modal"}/>

    <Router>

      <PedroNav  propColor={"orange"} propNr={56} propText={"PedroNav"}/>
      <NavFinal  propColor={"cornflowerblue"} propNr={56} propText={"NavFinal"}/>
      

      <Routes>

       <Route path="/" element={<Home  propColor={"pink"} propNr={37} propText={"Home"}/>}/>
       <Route path="/about" element={<About  propColor={"blue"} propNr={37} propText={"About"}/>}/> 
       <Route path="/info" element={<Info  propColor={"red"} propNr={37} propText={"Info"}/>}/> 
       <Route path="/contact" element={<Contact  propColor={"magenta"} propNr={37} propText={"Contact"}/>}/> 
       <Route path="*" element={<h1>Page not found</h1>}/>

      </Routes>

    </Router>

    <NavbarPedro propColor={"DarkGoldenRod"} propNr={456} propText={"NavbarPedro"}/>
    <MainPage propColor={"DarkRed"} propNr={40} propText={"MainPage"}/>
    <GridBootstrap propColor={"Chocolate "} propNr={48} propText={"GridBootstrap"}/>

    <article className="container">
    <h3> PEDRO div with <span className="badge bg-secondary">text</span></h3>

      <div className="container">
      <img src="./images/towel.jpg" className="rounded mx-auto d-block img-fluid" alt="towel_CENTER_PEDRO_IMG" style={{width:"30vw"}}/>
      </div>
   
      <h5>{pedroText}</h5>

      <img src="./images/cat.JPG" className="img-fluid" alt="pedro_img"/>

      <h6 className="lead">{pedroText}</h6>

      <div className="row align-items-center justify-content-between g-3d my-3">
        <img src="./images/forest-flower.JPG" className="rounded float-start" alt="forest-flower" style={{width:"30vw"}}/>
        <img src="./images/myPhoto.JPG" className="rounded float-end" alt="myphoto" style={{width:"30vw"}}/>
      </div>

      <div className="row align-items-center justify-content-around g-3d my-3">
        <img src="./images/myPhoto2.JPG" className="rounded float-start" alt="myPhoto2-flower" style={{width:"40vw"}}/>
        <img src="./images/myPhoto3.JPG" className="rounded float-end" alt="myPhoto3" style={{width:"40vw"}}/>
      </div>

      <div className="row container" style={{border:`1px solid green`}}>
          {name}
          {age}
          <div className="container">
                <img src={imgPhoto} className="rounded mx-auto d-block img-fluid" alt="towel_CENTER_PEDRO_IMG" style={{width:"30vw"}}/>
              </div>
          {email}
      </div>

      {user}

      </article>

    <TableBootstrap propColor={"darkmagenta"} propNr={60} propText={"TableBootstrap"}/>

    <User propColor={"deeppink"} propNr={63} propText={"User"}/>
    <User2 propColor={"yellow"} propName={"Andreea"} propImg={"./images/springtree.JPG"} propAge={78} propEmail={"andreea@yahoo.com"} propText={"lorem user 2"}/>
    <User2 propColor={"green"} propName={"Mirabela"} propImg={"./images/yellowCV.JPG"} propAge={73} propEmail={"mirabel@yahoo.com"} propText={"lorem user 22"}/>
    <User2 propColor={"blue"} propName={"Tony"} propImg={"./images/bostani.JPG"} propAge={32} propEmail={"tony@yahoo.com"} propText={"lorem user 222"}/>

    <BuyItem propColor={"tomato"} propNr={43} propText={"BuyItem"}/>


    <article className="container">

 
        <div className="card" style={{width: "50%" , border:"3px solid green"}}>
          <img src="./images/bicycle.jpg" className="card-img-top" alt="card_bicycle"/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              article with bootstrap card
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
            </p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
    

    </article>

    <Persons propColor={"magenta"} propNr={63} propText={"Persons"}/>


    {userSpEDRO.map((personpersonPedro , index) =>{
      //map are intotdeauna return
      return(<>
      <div key={index} className="container" style={{border:"1px solid forestgreen" , padding:"1em"}}>
        <h3>{personpersonPedro.name} has {personpersonPedro.age}</h3>
      </div>
      </>);
    })}


    {planets.map((planet , index) =>{
      //map are intotdeauna return
    
       if(planet.isGasPlanet) return <h3 style={{color:"indigo"}}>{planet.name} is gas planet .</h3> ;

    })}

{/* //short if */}
{planets.map((planet , index) => planet.isGasPlanet && <h3 style={{color:"magenta"}}>{planet.name} is gas planet .</h3>)}


    <Router>
     
      <Pagination propColor={"skyblue"} propNr={25} propText={"Pagination"}/>

      <Routes>

      <Route path="/page1" element={<Page1  propColor={"darkmagenta"} propNr={537} propText={"Page1"}/>}/>
      <Route path="/page2" element={<Page2  propColor={"floralwhite"} propNr={527} propText={"Page2"}/>}/>
      <Route path="/page3" element={<Page3  propColor={"pink"} propNr={127} propText={"Page3"}/>}/>
      <Route path="/page4" element={<Page4  propColor={"olive"} propNr={187} propText={"Page4"}/>}/>
      <Route path="/page5" element={<Page5  propColor={"rgb(157, 166, 212)"} propNr={237} propText={"Page5"}/>}/>

      </Routes>

     </Router>
    
    <Footer propColor={"OrangeRed"} propNr={75} propText={"Footer"}/>

    </section>
  );
}

export default App;
console.log("------------hello from app.js");
