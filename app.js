console.log("lets role");
const btn = document.querySelectorAll("button");
console.log(btn);
for (let i = 0; i < btn.length; i++) {
  let btnNow = btn[i];
  console.log(btnNow);
  btnNow.addEventListener("click", function () {
    btnNow.style.color = "yellow";
  });
}
btn[0].onclick = function () {
  console.log("you clicked start stop");
  btn[1].style.color = "white";
  btn[2].style.color = "white";
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
