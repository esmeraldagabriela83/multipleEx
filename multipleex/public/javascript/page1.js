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