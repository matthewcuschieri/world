var slideIndex = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
var slideId = [
  "basic",
  "buro",
  "sort",
  "dp",
  "human",

  "clique",
  "read",

  "knoll",
  "sites",
  "ball",

  "illo",
  "providence",
  "norwood",
];
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);
showSlides(1, 6);
showSlides(1, 7);
showSlides(1, 8);
showSlides(1, 9);
showSlides(1, 10);
showSlides(1, 11);
showSlides(1, 12);

function plusSlides(n, no) {
  showSlides((slideIndex[no] += n), no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {
    slideIndex[no] = 1;
  }
  if (n < 1) {
    slideIndex[no] = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no] - 1].style.display = "block";
}

function myFunction() {
  var element = document.getElementById("matthewcuschieri");
  element.classList.toggle("aboutmain");
}

// var changeOne = document.getElementsById("opt1");
// var changeTwo = document.getElementsByClassName("col3");
// var headIndex = "+";
// var fullHead =
//   "Previously he worked for Johnson & Johnson Brand Design Studio, Brian Belott and Ben La Rocco as a studio intern. He was recently invited to attend Anderson Ranch Arts Center, was featured in New American Paintings no. 152, the College Hill Independent, and exhibited in the Gelman Gallery (Memories and How We Hold Them) and Online Playroom (Love is in the Air).";

// function change() {
//   changeOne[0].innerHTML = "Matthew Cuschieri" + headIndex;
//   changeTwo[0].innerHTML = "+";
// }
// // run change function every 3 seconds
// setInterval(change, 1000);
