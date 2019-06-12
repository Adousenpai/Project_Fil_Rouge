var body = $('body');
$( document ).ready(function() {
  body.addClass(localStorage.getItem("theme"));
$("#switch").prop("checked" , localStorage.getItem("checkbox"));

});
$("#switch").on("click", () => {
  if ($("#switch").prop("checked")) {
    $(".couscous").addClass("dark");
    localStorage.setItem("checkbox" , "checked");
    localStorage.setItem("theme", "dark");

  } else {
    $(".couscous").removeClass("dark");

    localStorage.setItem("theme", " ");
    localStorage.setItem("checkbox" , "");
  }
});
