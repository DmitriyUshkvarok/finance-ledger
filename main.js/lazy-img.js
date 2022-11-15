const lazyImeg = document.querySelectorAll("img[loading='lazy']");

lazyImeg.forEach((images) => {
  images.addEventListener("load", onImageLoadet, { once: true });
});

function onImageLoadet() {
  event.target.classList.add("appear");
}

// if ("loading" in HTMLImageElement.prototype) {
//   const lazyImeg = document.querySelectorAll('img[loading="lazy"]');
//   lazyImeg.forEach((img) => (img.src = img.dataset.src));
//   console.log("браузер поддерживает ленивки");
// } else {
//   const script = document.createElement("script");
//   script.srs =
//     "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js";
//   script.integrity = "sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=";
//   script.crossorigin = "anonymous";
//   console.log("браузер не поддерживает ленивки");
//   document.body.appendChild(script);
// }
