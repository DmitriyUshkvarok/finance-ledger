// blog
var panelBlog = document.querySelector(".panel-blog");
var openPanelBlogButton = document.querySelector(".btn-blog");
var closePanelBlogButton = panelBlog.querySelector(".button-close-blog");

openPanelBlogButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  panelBlog.classList.add("panel-blog--show");
});

closePanelBlogButton.addEventListener("click", function () {
  panelBlog.classList.remove("panel-blog--show");
});
