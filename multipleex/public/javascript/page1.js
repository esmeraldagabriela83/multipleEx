


console.log("---hello from page1.js");

const costica1Arr=["item1" , "item22" , "item333" , "item4444" , "item55555" , "item666666"];

for(let i=0 ; i<costica1Arr.length ; i++){
   console.log(costica1Arr[i].length);
   console.log(costica1Arr[i] + " has " +costica1Arr[i].length + " letters ." );
}

const costica1ul=document.getElementById("costica1ul");

costica1ul.style.backgroundColor="pink";
costica1ul.style.padding="1em";
costica1ul.style.border="1px solid forestgreen";

//-----------------
const itemCostica1All=document.querySelectorAll(".itemCostica1");
for(let i=0 ; i<itemCostica1All.length ; i++){
    itemCostica1All[i].style.border="1px solid magenta";
    itemCostica1All[i].style.padding="0.5em";
    itemCostica1All[i].style.margin="0.5em";
    itemCostica1All[i].innerText=costica1Arr[i];
}
//------------------

const allcostica1ulParagraph=document.getElementById('allcostica1ulParagraph');

allcostica1ulParagraph.style.border="1px solid tomato";
allcostica1ulParagraph.style.padding="1em";
allcostica1ulParagraph.innerText='All items from the above list are: ' + costica1Arr.join(" , ");


//-----------------------------------------------------------------------------------------------------------------


///--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const cat_obj={
    catName:"micu pisicu",
    catAge:5,
    catImg:"./images/cat.JPG"

}

const catObj=document.getElementById("catObj");

catObj.style.backgroundColor="Bisque";
catObj.style.padding="1em";
catObj.style.margin="1em";
catObj.style.border="1px solid indigo";

//-------------

const cat_name_obj=document.getElementById("cat_name_obj");
cat_name_obj.innerText=cat_obj.catName;
cat_name_obj.style.border="1px solid blue";

//-----------

const cat_age_obj=document.getElementById("cat_age_obj");
cat_age_obj.innerText=cat_obj.catAge;

//------------

const cat_img_obj=document.getElementById("cat_img_obj");
cat_img_obj.style.width="300px";
cat_img_obj.style.height="300px";
cat_img_obj.style.borderRadius="50%";
cat_img_obj.style.backgroundRepeat="no-repeat";
cat_img_obj.src=cat_obj.catImg;
cat_img_obj.style.backgroundPosition="center";
cat_img_obj.style.backgroundSize="cover";

///--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const mypersons= [
    {
      code: 1186385258,
      name: "Andreea",
      surname: "Iordache",
      urlImage:"url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)",
      tel: "0722000000",
    },
    {
      code: 1991269451,
      name: "Iulian",
      surname: "Pop",
      urlImage:"url(https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80)",
      tel: "0722669610",
    },
    {
      code: 1283420333,
      name: "Ionel",
      surname: "Cutare",
      urlImage:"url(https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)",
      tel: "0733445566",
    }
  ];
  


console.log("mypersons arr is : " , mypersons);
console.log("mypersons.length arr is : " , mypersons.length);

//------------

const alleachPerson=document.querySelectorAll("div.eachPerson");

console.log("alleachPerson arr tags is S" , alleachPerson);

for(let i=0 ; i<alleachPerson.length ; i++){
    alleachPerson[i].style.border="1px solid indigo";
    alleachPerson[i].style.padding="1em";
    alleachPerson[i].style.margin="1em";
    alleachPerson[i].style.backgroundColor="floralwhite";
}

//----------------

const allperson_CODE=document.querySelectorAll("p.person_CODE");
console.log("allperson_CODE arr tags is : " , allperson_CODE);

for(let i=0 ; i<allperson_CODE.length ; i++){
    allperson_CODE[i].innerText=mypersons[i].code;
}

//-------------

const allname_person=document.querySelectorAll("h5.name_person");
console.log("allname_person arr tags is : " , allname_person);

for(let i=0 ; i<allname_person.length ; i++){
    allname_person[i].innerText=mypersons[i].name;
    allname_person[i].style.color="yellowgreen";
}

//------------------

const allsurname_person=document.querySelectorAll("h5.surname_person");
console.log("allsurname_person arr is : " , allsurname_person);

for(let i=0 ; i<allsurname_person.length ; i++){
    allsurname_person[i].innerText=mypersons[i].surname;
    allsurname_person[i].style.color="green";
    
}

//-----------------------

const allimg_person=document.querySelectorAll("div.img_person");
console.log("allimg_person arr is : " , allimg_person);

for(let i=0 ; i <allimg_person.length ; i++ ){
    allimg_person[i].style.width="500px";
    allimg_person[i].style.height="430px";
    allimg_person[i].style.backgroundRepeat="no-repeat";
    allimg_person[i].style.backgroundPosition="center";
    allimg_person[i].style.backgroundSize="cover";
    allimg_person[i].style.backgroundImage=mypersons[i].urlImage;
}

//---------------------

const alltel_person=document.querySelectorAll("h5.tel_person");
console.log("alltel_person arr is : " , alltel_person);

for(let i=0 ; i<alltel_person.length ; i++){
    alltel_person[i].innerText=mypersons[i].tel;
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const mycats= [
    {
      code: 1,
      name: "miau1",
      urlImage:"url(https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=1600)",
      age: 7,
    },
    {
      code: 2,
      name: "miau2",
      urlImage:"url(https://images.pexels.com/photos/177809/pexels-photo-177809.jpeg?auto=compress&cs=tinysrgb&w=1600)",
      age:9,
    },
    {
      code: 3,
      name: "miau3",
      urlImage:"url(https://images.pexels.com/photos/774731/pexels-photo-774731.jpeg?auto=compress&cs=tinysrgb&w=1600)",
      age:5,
    }
  ];

  const catsArticles=mycats.map((element , index) =>{

   let singleDiv=document.createElement("div");
   singleDiv.style.border="3px solid yellowgreen";
   singleDiv.style.padding="1em";
   singleDiv.style.margin="1em";
   singleDiv.style.color="yellow";
   singleDiv.style.width="500px";
   singleDiv.style.height="450px";
   singleDiv.style.backgroundRepeat="no-repeat";
   singleDiv.style.backgroundPosition="center";
   singleDiv.style.backgroundSize="cover";
   singleDiv.style.backgroundImage=element.urlImage;
   singleDiv.innerText=element.code + " Cat " + element.name + " is " + element.age + " years old.";

   //map are intotdeauna return

   return singleDiv;

  });
//----------------

  const articleCat=document.createElement("article");
  articleCat.style.border="3px solid green";
  articleCat.style.margin="1em";

//-----------------

catsArticles.forEach((element , index) =>{
    //element reprezinta fiecare singleDiv din catsArticles

    articleCat.appendChild(element);

});

//------------------

const catsSection=document.getElementById("catsSection");
catsSection.style.border="3px solid red";
catsSection.appendChild(articleCat);

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const mouse="I am a mouse";
const mouseImg="https://images.pexels.com/photos/2280794/pexels-photo-2280794.jpeg?auto=compress&cs=tinysrgb&w=1600";

const mouseText=document.getElementById("mouseText");
mouseText.innerText=mouse;
mouseText.style.color="magenta";

const mouse_img=document.getElementById("mouse_img");
mouse_img.src=mouseImg;
mouse_img.style.border="3px solid magenta";
mouse_img.style.width="500px";
mouse_img.style.height="450px";

//--------------

const m123mouse=document.getElementById("m123mouse");
console.log("mouse input value from user" , m123mouse.value);

const mouseUserCONTENT=document.getElementById("mouseUserCONTENT");


const mouseBtn=document.getElementById("mouseBtn");
mouseBtn.style.color="darkmagenta";
mouseBtn.style.padding="0.5em";

mouseBtn.addEventListener("click" , function(event){
    event.preventDefault();

    this.style.backgroundColor="gray";

    console.log("mouse input value from user" , m123mouse.value);

    mouseUserCONTENT.innerText=m123mouse.value;
    mouseUserCONTENT.style.color="darkmagenta";
})

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const ageVote123=document.getElementById("ageVote123");
ageVote123.style.border="1px solid green";


const votePermission=document.getElementById("votePermission");
votePermission.style.padding="1em";
votePermission.style.margin="1em";
votePermission.style.backgroundColor="Beige";


const btnPermission=document.getElementById("btnPermission");




btnPermission.addEventListener("click" , function(event){
    event.preventDefault();

    this.style.backgroundColor="BurlyWood";
    

    if(ageVote123.value >=18){
        votePermission.innerText="you can vote. Your age is : " + ageVote123.value;
        votePermission.style.color="green";
        this.style.color="forestgreen";
    }else{
        votePermission.innerText="you can not vote. Your age is : " + ageVote123.value;
        votePermission.style.color="red";
        this.style.color="tomato";
    }

});

//////////////////////////////////////////////////////////////////////////////------------------------------------------------------------------------------------------------------------


const winter=`
<div>
<h3>winter</h3>
<img src="https://images.pexels.com/photos/688660/pexels-photo-688660.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="winter_img" style="width:300px" />
</div>
`;

const summer=`
<div>
<h3>summer</h3>
<img src="https://images.pexels.com/photos/1152359/pexels-photo-1152359.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="winter_img" style="width:300px" />
</div>
`;

const noSeason=`<h3>no season</h3>`;

const season123=document.getElementById("season123");

const seasonBtn=document.getElementById("seasonBtn");

const seasonArticle=document.getElementById("seasonArticle");

seasonBtn.addEventListener("click" , function(event){
    event.preventDefault();

    this.style.color="DarkBlue";

    if (season123.value === "winter") {
        //  block of code to be executed if condition1 is true
        seasonArticle.innerHTML=winter;
        seasonArticle.style.backgroundColor="Cyan";
      } else if (season123.value === "summer") {
        //  block of code to be executed if the condition1 is false and condition2 is true
        seasonArticle.innerHTML=summer;
        seasonArticle.style.backgroundColor="pink";
      } else {
        //  block of code to be executed if the condition1 is false and condition2 is false

        seasonArticle.innerHTML=noSeason;
        seasonArticle.style.backgroundColor="yellow";
      }

});

//----------19042022-------------------------------------------------------------------------------------------------------------------------------------------------------

const horse={
  name: "Pexels Horse",
  yearOfBirth: 2000,
  proffesion: "travelling on 4 foot",
  imgHorse:"https://images.pexels.com/photos/15118224/pexels-photo-15118224.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
};

const horseNameParagrah=document.getElementById("horseNameParagrah");
horseNameParagrah.style.border="1px solid green";
horseNameParagrah.style.padding="0.5em";
horseNameParagrah.style.margin="0.5em";
horseNameParagrah.style.color="green";
horseNameParagrah.innerText=horse.name + " is " + `${(new Date()).getFullYear() - horse.yearOfBirth}` + " years old and has the proffesion of: " + horse.proffesion ;


const horse_obj_img=document.getElementById("horse_obj_img");
horse_obj_img.src=horse.imgHorse;
horse_obj_img.style.width="300px";
horse_obj_img.style.border="3px solid green";

/////--

function whoAreYouHorse(horseObj){
  return`
  My name is : ${horseObj.name} . 
  I am ${(new Date()).getFullYear() - horseObj.yearOfBirth} years old .
  My profession is : ${horseObj.proffesion} .
  `;
}

console.log(whoAreYouHorse(horse));

const titleHorse=document.getElementById("titleHorse");
titleHorse.style.border="1px solid cyan";
titleHorse.style.padding="0.5em";
titleHorse.style.margin="0.5em";
titleHorse.style.color="cyan";
titleHorse.innerText=whoAreYouHorse(horse);

////------------19042022

function horseHTML(horseObj){

const articleTag=`
  <article>
  <p style="color:tomato">Name is ${horseObj.name}</p>
  <p>Age of horse: ${(new Date()).getFullYear() - horseObj.yearOfBirth}</p>
  <p>Name is ${horseObj.proffesion}</p>
  <img src=${horseObj.imgHorse} alt="horse_img_html_function" style="width:300px"/>
  </article>
`
  return articleTag;
}

const horseSection=document.getElementById("horseSection");

horseSection.style.border="1px solid tomato";

horseSection.innerHTML=horseHTML(horse);

//-------------19042022

function horseDOM(horseObj){

const articleHorse=document.createElement("article");
articleHorse.style.border="1px solid cyan";
articleHorse.style.color="cyan";
articleHorse.style.fontWeight="bold";
articleHorse.style.margin="0.5em";
articleHorse.style.padding="0.5em";
articleHorse.innerText=`
My name is : ${horseObj.name} . 
I am ${(new Date()).getFullYear() - horseObj.yearOfBirth} years old .
My profession is : ${horseObj.proffesion} .
`;

return articleHorse;

}

const horseSectionDOM=document.getElementById("horseSectionDOM");
horseSectionDOM.appendChild(horseDOM(horse));