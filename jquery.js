console.log("check");

$(document).ready(function () {
  $("#designlink").click(function () {
    $(".kunstinfo").toggleClass("designlink");
  });

  $("#designlink").click(function () {
    $("#kunstwrap").toggleClass("designlink");
  });
  $("#gdfwdesignlink").click(function () {
    $(".gdfwinfo").toggleClass("gdfwdesignlink");
  });

  $("#gdfwdesignlink").click(function () {
    $("#gdfwwrap").toggleClass("gdfwdesignlink");
  });
});
