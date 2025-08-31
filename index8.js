// const heading = document.getElementById("heading");
// console.log(heading);

// const infoElements = document.getElementsByClassName("info");
// console.log(infoElements);
// [...infoElements].forEach(item => console.log(item))

// const pElements = document.getElementsByTagName("h1");
// console.log(pElements);

//Query selector
// const heading2 = document.querySelector("#heading");
// console.log(heading2);
// const infoElements2 = document.querySelectorAll(".info").forEach(item => console.log(item));


const pElement = document.createElement("p");
pElement.innerText = "This is a new paragraph.";
document.body.appendChild(pElement);
// function highlightText(){
//     document.querySelectorAll(".info").forEach(item => item.style.backgroundColor = "yellow");
// }

const span = document.createElement("span");
span.innerText = "This is a new span.";

const pElem =document.querySelector(".info")
console.log(pElem);
document.body.insertBefore(span,pElem.nextElementSibling)


pElem.innerHTML = "This is a new<strong style='display:none'>span</strong>.";

// pElem.innerText = "This is a new span.";
// console.log(pElem.innerText);
// console.log(pElem.innerHTML);
// console.log(pElem.textContent);

let list = document.getElementById("itemList")

const listChild = list.children[0];
// list.removeChild(listChild);

// list.replaceChildren(pElem)


console.log(list.children)
console.log(list.childNodes)
console.log(list.firstChild)
console.log(list.lastChild)
console.log(list.firstElementChild)
console.log(list.lastElementChild)
console.log(list.parentElement)
console.log(list.nextElementSibling)
console.log(list.previousElementSibling)
console.log(list.nextSibling)
console.log(list.previousSibling)


// console.log(list.classList)

list.classList.add("newClass")

console.log(list.classList)

list.classList.replace("newClass", "oldClass")

console.log(list.classList)

list.classList.toggle("oldClass")

console.log(list.classList)

list.classList.toggle("oldClass")

console.log(list.classList)

list.style.color = "red"