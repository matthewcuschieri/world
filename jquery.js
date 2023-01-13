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

// $(".col3").on("click", function (e) {
//   $("#opt3").toggleClass("active");

//   if (!$("#").hasClass("active")) {
//     $("#listbar").toggleClass("active");
//     $("#wrapper").toggleClass("active");
//   }
//   //you can list several class name
// });
// function {

// changeOne = document.getElementsById("opt1");
// changeTwo = document.getElementsByClassName("col3");
// headIndex = "+";

// setInterval(function () {
//   $("#opt1").replaceWith('<div id="opt2">' + "</div>"); if (!S)
// }, 9000);

$(".about").on("click", function (e) {
  $("#opt3").toggleClass("active");
  $("#minus").toggleClass("active");

  if (!$("#opt3").hasClass("active")) {
    $("#opt2").removeClass("active");
    $("#opt1").removeClass("active");
    $("#minus").toggleClass("active");
    if (!$("#opt3:not(.active)").toggleClass("active")) {
    }
  }

  e.preventDefault();
});
$("#minus").on("click", function (e) {
  $("#opt2").addClass("active");
  $("#aboutPage").removeClass("active");
  $("#opt3").removeClass("active");
  $("#opt1").removeClass("active");
  $("#plus").addClass("active");
  $("#minus").toggleClass("active");

  e.preventDefault();
});
$("#plus").on("click", function (e) {
  $("#opt1").toggleClass("active");

  $("#aboutPage").toggleClass("active");

  $("#plus").removeClass("active");
  if (!$("#opt1").hasClass("active")) {
    $("#opt2").removeClass("active");
    $("#opt3").removeClass("active");
  }
  if (!$("#opt1").hasClass("active")) {
    $("#opt2").removeClass("active");
    $("#opt3").removeClass("active");
  }
  e.preventDefault();
});
let timeoutId;
$(document).ready(function () {
  console.log("ready!");
  $("#opt1").toggleClass("active");
  $("#opt2").addClass("active");
  $("#aboutPage").toggleClass("active");
  timeoutId = setTimeout(function () {
    $("#aboutPage").removeClass("active");
    $("#plus").toggleClass("active");
    $("#opt1").removeClass("active");
  }, 2000);

  // if (!$("#opt3").hasClass("active")) {
  //   clearTimeout(timeoutId);
  // }
  $("#opt1".animate({ opacity: "0.4" }, "slow"));
});

!$("#opt3").hasClass("active");
{
  clearTimeout(timeoutId);
}
!$("#opt3").on("click", function (e) {
  clearTimeout(timeoutId);
  e.preventDefault();
});
