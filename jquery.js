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
  // $("#sortdesignlink").click(function () {
  //   $(".sortinfo").toggleClass("sortdesignlink");
  // });

  // $("#sortdesignlink").click(function () {
  //   $("#sortwrap").toggleClass("sortdesignlink");
  // });
  $("#more").click(function () {
    $(".team").toggle();
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
  // $("#aboutPage").removeClass("active");
  $("#opt3").removeClass("active");
  // $("#opt1").removeClass("active");
  // $("#plus").addClass("active");
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

// $(document).ready(function () {
//   setTimeout(function (e) {
//     if (!$("#opt3").hasClass("active") != true) {
//       console.log("good");
//     } else {
//       $("#plus").addClass("active");
//       $("#aboutPage").removeClass("active");
//       $("#opt1").removeClass("active");
//     }
//   }, 2000);
// });

const blurredImageDiv = document.querySelector(".blur-load");
const img = blurredImageDiv.querySelector("img");
function loaded() {
  blurredImageDiv.classList.add("loaded");
}
if (img.complete) {
  loaded();
} else {
  img.addEventListener("load", loaded);
}

$("#pbut1").on("click", function (e) {
  $("#pamp1").toggleClass("active");
  $("#pamp2").removeClass("active");
  $("#pamp3").removeClass("active");
  if (!$("#pamp1").hasClass("active")) {
    $("#pamp2").removeClass("active");
    $("#pamp3").removeClass("active");

    if (!$("#pamp1:not(.active)").toggleClass("active")) {
    }
  }

  e.preventDefault();
});
$("#pbut2").on("click", function (e) {
  $("#pamp2").toggleClass("active");
  $("#pamp1").removeClass("active");
  $("#pamp3").removeClass("active");
  if (!$("#pamp2").hasClass("active")) {
    $("#pamp1").removeClass("active");
    $("#pamp3").removeClass("active");

    if (!$("#pamp2:not(.active)").toggleClass("active")) {
    }
  }

  e.preventDefault();
});
$("#pbut3").on("click", function (e) {
  $("#pamp3").toggleClass("active");
  $("#pamp1").removeClass("active");
  $("#pamp2").removeClass("active");

  if (!$("#pamp3").hasClass("active")) {
    $("#pamp1").removeClass("active");
    $("#pamp2").removeClass("active");

    if (!$("#pamp3:not(.active)").toggleClass("active")) {
    }
  }

  e.preventDefault();
});
