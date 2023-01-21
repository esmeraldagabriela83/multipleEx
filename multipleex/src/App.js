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
import Footer from "./js/Footer.js";
import Modal from "./js/Modal.js";

import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Info from "./pages/Info.js";
import Contact from "./pages/Contact.js";
import {PedroNav} from "./pages/PedroNav.js";
import NavFinal from "./pages/NavFinal.js";
import MainPage from "./pages/MainPage.js";


import NavbarPedro from "./pages/NavbarPedro.js";

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
    <Footer propColor={"OrangeRed"} propNr={75} propText={"Footer"}/>
    <Modal propColor={"yellow"} propNr={34} propText={"Modal"}/>

    <Router>

      //<PedroNav  propColor={"orange"} propNr={56} propText={"PedroNav"}/>
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

    </section>
  );
}

export default App;
console.log("------------hello from app.js");
