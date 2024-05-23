console.log("lets role");
// Global variable
var timer;
var timeInterval;
var counter = 0;
var recordTime;
var seconds = 0;
// Get all elements
const btn = document.querySelectorAll("button");
console.log(btn, typeof btn);

//Loop through them and add style color
for (let i = 0; i < btn.length; i++) {
  let btnNow = btn[i];
  console.log(btnNow, typeof btnNow);
  //on click add color
  btnNow.addEventListener("click", function () {
    btnNow.style.color = "black";
    btnNow.style.backgroundColor = "white";
  });
}
//Get individual buttons
btn[0].onclick = function () {
  console.log("you clicked start stop");
  btn[1].style.color = "white";
  btn[2].style.color = "white";

  //get the timer
  timer = document.querySelector("#timer");
  console.log(timer.innerHTML);

  timeInterval = setInterval(() => {
    // add seconds every 10 milli seconds and when it reaches
    //100 increase counter to 1.
    seconds++;
    if (seconds === 100) {
      counter++;
      seconds = 0;
    }
    //render vars in timer
    timer.innerHTML = counter + ":" + seconds;
    //if seconds is greater than 0
    //which means the interval started
    // do this things
    if (seconds > 0) {
      btn[0].textContent = "Stop";
      btn[0].onclick = function () {
        btn[1].style.color = "white";
        btn[2].style.color = "white";
        btn[1].style.backgroundColor = "black";
        btn[2].style.backgroundColor = "black";
        clearInterval(timeInterval);
      };
    }
  }, 10);
};

btn[1].onclick = function () {
  console.log("You clicked reset");
  btn[0].style.color = "white";
  btn[2].style.color = "white";
  //refresh the location
  window.location.reload();
};
btn[2].onclick = function () {
  console.log("You clicked record Time");
  btn[0].style.color = "white";
  btn[1].style.color = "white";
  btn[0].style.backgroundColor = "black";
  btn[1].style.backgroundColor = "black";

  recordTime = document.querySelector("#recordTime");
  var li = document.createElement("li");
  li.innerHTML = counter + ":" + seconds;
  recordTime.append(li);
};

//Handling Key presses
document.addEventListener("keypress", handleKeyPress);

function handleKeyPress(event) {
  var keyPressed = event.key;
  if (keyPressed === "s") {
    btn[0].onclick();
  } else if (keyPressed === "r") {
    btn[1].onclick();
  } else if (keyPressed === "t") {
    btn[2].onclick();
  }
}
