
console.log("---hello from page2.js");



const frog1 = {
    name: "Frog1",
    yearOfBirth: 2017,
    proffesion: "Lord of Pond",
    imgPhoto:"https://images.pexels.com/photos/1370740/pexels-photo-1370740.jpeg?auto=compress&cs=tinysrgb&w=1600"
  };


  const frog1paragraph=document.getElementById("frog1paragraph");

  frog1paragraph.style.border="1px solid magenta";
  frog1paragraph.style.padding="1em";
  frog1paragraph.style.margin="1em";
  frog1paragraph.style.color="magenta";
  frog1paragraph.innerText=`My name is ${frog1.name} .
  I am ${(new Date()).getFullYear() - frog1.yearOfBirth} years old.
  My proffesion is ${frog1.proffesion}.`;

  //------

  const frog_img1=document.getElementById("frog_img1");
  frog_img1.style.width="300px";
  frog_img1.src=frog1.imgPhoto;

  //----------

  function whoAreYouSingleFrog1(objFrog){
    return`My name is ${objFrog.name} .
    I am ${(new Date()).getFullYear() - objFrog.yearOfBirth} years old.
    My proffesion is ${objFrog.proffesion}.`;
  }

  const titleFrog1=document.getElementById("titleFrog1");
  titleFrog1.style.border="1px solid darkmagenta";
  titleFrog1.style.padding="1em";
  titleFrog1.style.margin="1em";
  titleFrog1.style.color="darkmagenta";
  titleFrog1.innerText=whoAreYouSingleFrog1(frog1);

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const alleachFrog=document.querySelectorAll(".eachFrog");
console.log("alleachFrog arr is : " , alleachFrog);

  const frogs=[
    frog1,
    {
        name: "Frog2",
        yearOfBirth: 2019,
        proffesion: "Lord of lake",
        imgPhoto:"https://images.pexels.com/photos/3180755/pexels-photo-3180755.jpeg?auto=compress&cs=tinysrgb&w=1600"  
    },
    {
        name: "Frog3",
        yearOfBirth: 2021,
        proffesion: "Lord of spring",
        imgPhoto:"https://images.pexels.com/photos/2631482/pexels-photo-2631482.jpeg?auto=compress&cs=tinysrgb&w=1600"
    }
  ];


  function whoAreYouFrogs(objFbrog){
    return `My name is ${objFbrog.name}.
    I am ${(new Date()).getFullYear() - objFbrog.yearOfBirth} years old.
    My proffesion is ${objFbrog.proffesion}.`;
  };


  for(let i=0 ; i<alleachFrog.length ; i++){
    alleachFrog[i].innerText=whoAreYouFrogs(frogs[i]);
    alleachFrog[i].style.padding="0.5em";
    alleachFrog[i].style.margin="0.5em";
    alleachFrog[i].style.color="yellowgreen";
}

//---//------

const allforeachFrog=document.querySelectorAll(".foreachFrog");

frogs.forEach(el => {
    console.log(whoAreYouFrogs(el));
    
  for(let j=0 ; j<allforeachFrog.length ; j++){
    allforeachFrog[j].innerText=whoAreYouFrogs(el);
    allforeachFrog[j].style.color="green";
    allforeachFrog[j].style.padding="0.5em";
    allforeachFrog[j].style.margin="0.5em";
  }

});


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function frog1HTML(frogObj){
    return `
    <article style="border:1px solid deeppink ; padding:1em ; margin:1em">
    <h3>${frogObj.name}</h3>
    <p>I am ${(new Date()).getFullYear() - frogObj.yearOfBirth} years old.
    My proffesion is ${frogObj.proffesion}.</p>
    <img src=${frogObj.imgPhoto} alt="js_img_frogHTML" style="width:300px"/>
    </article>
    `;
}


const frog_section=document.getElementById("frog_section");

frog_section.style.padding="0.5em";
frog_section.style.margin="0.5em";
frog_section.style.color="deeppink";
frog_section.innerHTML=frog1HTML(frog1);

//-----------

const allfrogHTML=document.querySelectorAll(".frogHTML");
console.log("allfrogHTML arr is : " , allfrogHTML);

for(let i=0 ; i<allfrogHTML.length ; i++){
    allfrogHTML[i].innerHTML=frog1HTML(frogs[i]);
    allfrogHTML[i].style.color="tomato";

}
