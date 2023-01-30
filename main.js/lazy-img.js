const lazyImeg = document.querySelectorAll("img[loading='lazy']");

lazyImeg.forEach((images) => {
  images.addEventListener("load", onImageLoadet, { once: true });
});

function onImageLoadet(event) {
  event.target.classList.add("appear");
}
