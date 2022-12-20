var slideIndex = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
var slideId = [
  "basic",
  "buro",
  "kunst",
  "read",
  "human",
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
