import React, {useState,useEffect} from 'react';
//import '../styles/Mytext.scss';


function WindowsAfter(props){

  //destructurare props
  const {propColor , propNr , propText}=props;

  const [myImg , setMyImg]=useState("https://images.pexels.com/photos/13968801/pexels-photo-13968801.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load");

  //-------------------------

  const handleChangeImg=(event) =>{
    event.preventDefault();

console.log("myImg before change is: lights" , myImg);

    setMyImg("https://images.pexels.com/photos/7624629/pexels-photo-7624629.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load");

    console.log("myImg after change is: sunsetVibes text" , myImg);
  }

  console.log("check window after");

  //---------------------------------------------------------------------------------------------------------

  return(
    <section style={{padding:'1em' , margin:'1em' , border:`1px dotted ${propColor}`}}>
    <h2 style={{color:propColor}}>function component: {propText}</h2>

    <img src={myImg} alt="img-windowsAfter" style={{width:"300px"}}/><br></br>

    <button onClick={handleChangeImg}>change img</button>
    </section>
  );

}

export default WindowsAfter;