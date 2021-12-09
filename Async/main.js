console.log("script init");

setTimeout(function () {
  console.log("This is logged after 3 seconds");
}, 3000);

setInterval(function () {
  console.log("This is logged every 3 seconds");
}, 3000);

setTimeout(function () {
  console.log("This is logged after 5 seconds");
}, 5000);

const textTolog = "I am here!";
const delay = 4000;

setTimeout(function () {
  console.log(textTolog);
}, delay);

const body = document.querySelector("body");
const b1 = document.createElement("button");
body.appendChild(b1);

b1.addEventListener("click", (setTimeout) => {
  setTimeout(function () {
    console.log("You clicked the button!");
  }, 5000);
});
