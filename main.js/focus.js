var elementToFocusOn = $(".owerlay-social");

elementToFocusOn.click(function () {
  elementToFocusOn.focus();
});

elementToFocusOn.focus(function () {
  console.log("Focused");
});

elementToFocusOn.blur(function () {
  console.log("Blurred");
});
// $(window).on("keydown", function (e) {
//   e.preventDefault();
//   var f = $(".owerlay-social.tabfocus");
//   if (e.which != 9) return false;
//   if (f.length) {
//     f.removeClass("tabfocus");
//     if (f.next().length) {
//       f.next().addClass("tabfocus");
//     } else {
//       $(".owerlay-social").first().addClass("tabfocus");
//     }
//   } else {
//     $(".owerlay-social").first().addClass("tabfocus");
//   }
//   return false;
// });