console.log("check");

$(document).ready(function () {
  $("#basicdesignlink").click(function () {
    $("#basicwrap").toggleClass("basicdesignlink");
  });
  $("#basicdesignlink").click(function () {
    $(".basicinfo").toggleClass("basicdesignlink");
  });
  $("#designlink").click(function () {
    $(".kunstinfo").toggleClass("designlink");
  });

  $("#designlink").click(function () {
    $("#kunstwrap").toggleClass("designlink");
  });
  $("#readdesignlink").click(function () {
    $("#readwrap").toggleClass("readdesignlink");
  });
  $("#readdesignlink").click(function () {
    $(".readinfo").toggleClass("readdesignlink");
  });
  $("#gdfwdesignlink").click(function () {
    $(".gdfwinfo").toggleClass("gdfwdesignlink");
  });

  $("#gdfwdesignlink").click(function () {
    $("#gdfwwrap").toggleClass("gdfwdesignlink");
  });

  $("#hidesignlink").click(function () {
    $(".hiinfo").toggleClass("hidesignlink");
  });

  $("#hidesignlink").click(function () {
    $("#hiwrap").toggleClass("hidesignlink");
  });
});
