// import logo from './logo.svg';
import './App.css';

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
import Instructors from "./js/Instructors.js";
import Footer from "./js/Footer.js";

function App() {
  return (
    <div className="App">

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
    <Footer propColor={"OrangeRed"} propNr={75} propText={"Footer"}/>

    </div>
  );
}

export default App;
