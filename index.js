
document.getElementById("greatGrandParent").addEventListener("click", function (event) {
  //   console.log("event.target", event.target);
  console.log("Great Grand Parent Clicked");
  
});

document.getElementById("grandParent").addEventListener("click", function (event) {
  //   console.log("event.target", event.target);
  event.stopPropagation();

  console.log("Grand Parent Clicked");
//     console.log("event.target.tagName", event.target.tagName);
//   console.log("event.target.textContent", event.target.textContent);
},true);

document.getElementById("parent").addEventListener("click", function (event) {
  //   console.log("event.target", event.target);
  console.log("Parent Clicked");
});

document.getElementById("mySelf").addEventListener("click", function (event) {
  //   console.log("event.target", event.target);
  console.log("Myself Clicked");
});

function handleClick(a){
    console.log(a + " Clicked");
}

function handleClick1(a){
    console.log(a + " Clicked");
}
function handleClick2(a){
    console.log(a + " Clicked");
}
document.getElementById("list").addEventListener("click", function (event) {
  //   console.log("event.target", event.target);
  console.log("List Clicked");

    console.log("event.target", event.target);
//   console.log("event.target.name", event.target.name);
  console.log("EventTargetValue", event.target.value);
  console.log("EventType", event.type);
  console.log("EventCurrentTarget", event.currentTarget);
  console.log("event.target.tagName", event.target.tagName);
  console.log("event.target.textContent", event.target.textContent);
});

document.getElementsByTagName("a")[0].addEventListener("click", function (event) {
  event.preventDefault();
  console.log("Anchor Clicked");
});

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Form Submitted");
});
