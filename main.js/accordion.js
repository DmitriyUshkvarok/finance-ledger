var acc = document.querySelector(".btn--servicess");
var panel = document.querySelector(".panel");

acc.onclick = function () {
  acc.classList.toggle("active");
  panel.classList.toggle("active");
};

