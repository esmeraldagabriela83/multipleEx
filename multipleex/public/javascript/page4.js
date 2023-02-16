console.log("hello from page4.js");

const str1="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

const str2="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.";
//-------------------------------------------------

const str1paragraph=document.getElementById("str1paragraph");
str1paragraph.innerText=str1.toUpperCase();
str1paragraph.style.color="cornflowerblue";

const str2paragraph=document.getElementById("str2paragraph");
str2paragraph.innerText=str2.toLowerCase();
str2paragraph.style.color="deeppink";

//----------

const str2paragraphHTML=document.getElementById("str2paragraphHTML");
str2paragraphHTML.innerHTML=`<h3 style="color:darkmagenta">${str2}</h3>`;

//---------------------19042022

const str = "Marin Catalin";

let result1 = [...str].map((el,i) => i % 2 == 0 ? el.toUpperCase() : el.toLowerCase()).join("");
console.log(result1);

const result1paragraph=document.getElementById("result1paragraph");
result1paragraph.innerText=result1;
result1paragraph.style.color="magenta";

//-----------

let result2=[...str1].map((el , index) => index % 2 == 0 ? el.toUpperCase() : el.toLowerCase());

const result2paragraph=document.getElementById("result2paragraph");
result2paragraph.innerText=result2;
result2paragraph.style.color="magenta";

//------------

let result3=[...str2].map((el , index) => index % 2 == 0 ? el.toUpperCase() : el.toLowerCase());

const result3paragraph=document.getElementById("result3paragraph");
result3paragraph.innerText=result3;
result3paragraph.style.color="magenta";


//TEMPLATE STRINGS (Sabloane pentru sir de caractere); 19042022

//https://www.w3schools.com/js/js_string_templates.asp

//Variable Substitutions

let firstName = "John";
let lastName = "Doe";

let textPerson=`Person is : ${firstName} ${lastName}`;
console.log("textPerson is : " , textPerson);

const textPersonParagraph=document.getElementById("textPersonParagraph");
textPersonParagraph.innerText=textPerson;

//---------

let textPersonHTML=`<h3 style="color:green">Person is : ${firstName} ${lastName}</h3>`;

const textPersonParagrapHTML=document.getElementById("textPersonParagrapHTML");
textPersonParagrapHTML.innerHTML=textPersonHTML;

//-----------------

//https://www.w3schools.com/js/tryit.asp?filename=tryjs_templates_html

let header = "Templates Literals";
let tags = ["template literals", "javascript", "es6"];

let html = `<h2 style="color:yellowgreen">${header}</h2><ul>`;

for(let i=0 ; i<tags.length ; i++){
    html += `<li style="color:forestgreen">${tags[i]}</li>`;
}

html += `</ul>`;

document.getElementById("demo").innerHTML=html;

//andrei 19 04 2022

const mybutton = {
    text: "Send message Andrei",
    id: "sendMsg",
    width: "auto",
    padding: 20
  };

  function sendMsgAndrei(btnObj){
    return `This is not a button.\nIt is ${btnObj.width} wide.\nThe text on it says "${btnObj.text}".`;
  }

  console.log(sendMsgAndrei(mybutton));

  const articleForButton=document.getElementById("articleForButton");
  articleForButton.innerHTML=sendMsgAndrei(mybutton);

  //----catalin 19 04 2022

  function btnHTMLcata(objBtn){
    const btn = `<button style="width:${objBtn.width}px; padding:${objBtn.padding}px" id="${objBtn.id}">${objBtn.text}</button>`;
    return btn;
  }

  const articleForButtonHTML=document.getElementById("articleForButtonHTML");
  articleForButtonHTML.innerHTML=btnHTMLcata(mybutton);

  //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

  function DOMButton(buttonObj){
    const btn = document.createElement('button');
    btn.style.width = buttonObj.width + 'px';
    btn.style.padding = buttonObj.padding + 'px';
    btn.id = buttonObj.id;
    btn.innerText = buttonObj.text;
    return btn;
  }

  const articleForButtonDOM=document.getElementById("articleForButtonDOM");
  articleForButtonDOM.appendChild(DOMButton(mybutton));