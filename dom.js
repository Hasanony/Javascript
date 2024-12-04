
//get by id
let msz=document.getElementById("message");
console.log(msz);
//get by class
let msz2=document.getElementsByClassName("msg");
console.log(msz2);
//get by name
let msz3=document.getElementsByName("lan");
console.log(msz3);
//get by tagname
let msz4=document.getElementsByTagName("p");
console.log(msz4);

//queryselector
let mssg=document.querySelector("#message");
console.log(mssg);
let mssg2=document.querySelector("msg");//this is for 1st element
console.log(mssg2);
//queryselectorall
let mssg3=document.querySelectorAll("#message");//this is for all
console.log(mssg);
let mssg4=document.querySelectorAll("div,p");//this is for all
console.log(mssg4);


//find the parent,child,sibilings nodes

let txt=document.querySelector("#message");
console.log(txt.parentNode);

let child=document.querySelector(".tittle");
console.log(child.childNodes);

let sibilings=document.querySelector(".msg");
console.log(sibilings.previousElementSibling);
console.log(sibilings.nextElementSibling);


//create elements

let div=document.createElement("div");
div.className="new";
div.innerHTML="<h1>welcome</h1>";

console.log(div);




//appendchild
let menu=document.getElementById("menu");
 let list=document.createElement("li");
 list.innerHTML="contact";
 menu.appendChild(list); 



 /*insertadjacenthtml
 postionname are
 *beforebegin
 *afterbegin
 *beforeend
 *afterend
 */

 menu.insertAdjacentHTML("afterbegin","<li>about</li>");


 //removechild

 menu.removeChild(menu.firstElementChild);