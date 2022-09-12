var panel = document.querySelector(".panel");
var openPopupButton = document.querySelector(".btn--servicess");
var closePopupButton = panel.querySelector(".button-close");

openPopupButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  panel.classList.add("panel--show");
});

closePopupButton.addEventListener("click", function () {
  panel.classList.remove("panel--show");
});