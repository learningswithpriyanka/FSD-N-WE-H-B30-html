function handleClick(arg) {
  console.log("Argument passed: " + arg);
}

const myBtn2 = document.getElementById("id2");
// myBtn2.onclick = function () {
//   console.log("Button 2 clicked");
// };

// myBtn2.onclick = function () {
//   console.log("In another Listener");
// };

// myBtn2.addEventListener("click",  function () {
//       handleClick("GUVI");
// });
// myBtn2.removeEventListener("click", function () {
//    handleClick("GUVI");
// });

myBtn2.addEventListener("click", function (event) {
  console.log("addEventListener 2");
  console.log("event.target", event.target);
  console.log("event.target.name", event.target.name);
  console.log("EventTargetValue", event.target.value);
  console.log("EventType", event.type);

});

// document.onDOMContentLoaded = function(){
//     console.log("DOM Loaded 1234");
// }

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM Loaded");
});
