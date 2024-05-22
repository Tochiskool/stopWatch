console.log("lets role");
// Global variable
var timer;
var timeInterval;
var counter = 0;
var recordTime;
var seconds = 0;
// Get all elements
const btn = document.querySelectorAll("button");
console.log(btn);

//Loop through them and add text color
for (let i = 0; i < btn.length; i++) {
  let btnNow = btn[i];
  console.log(btnNow);
  //on click add color
  btnNow.addEventListener("click", function () {
    btnNow.style.color = "yellow";
  });
}
//Get individual buttons
btn[0].onclick = function () {
  console.log("you clicked start stop");
  btn[1].style.color = "white";
  btn[2].style.color = "white";
  timer = document.querySelector("#timer");
  console.log(timer.innerHTML);
  timeInterval = setInterval(() => {
    seconds++;
    if (seconds === 100) {
      counter++;
      seconds = 0;
    }
    timer.innerHTML = counter + ":" + seconds;
    if (seconds > 0) {
      btn[0].textContent = "Stop";
      btn[0].addEventListener("click", function () {
        window.location.reload();
      });
    }
  }, 10);
};

btn[1].onclick = function () {
  console.log("You clicked reset");
  btn[0].style.color = "white";
  btn[2].style.color = "white";
};
btn[2].onclick = function () {
  console.log("You clicked record Time");
  btn[0].style.color = "white";
  btn[1].style.color = "white";
};
