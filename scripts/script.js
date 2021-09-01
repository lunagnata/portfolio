// BURGER ANIMATION ON CLICK
function toggleBurger(x) {
  x.classList.toggle("change");
}

// NAVBAR SHOW ON SCROLL DOWN
// When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document.getElementById("navbar").classList.add("nav-background-color");
  } else {
    document.getElementById("navbar").classList.remove("nav-background-color");
  }
}

// TOGGLE SWITCHER
var romanianLanguage = document.getElementById("romanian-language");
var englishLanguage = document.getElementById("english-language");
var textElementsENG = document.querySelectorAll(".english-language-text");
var textElementsRO = document.querySelectorAll(".romanian-language-text");

// Toggle Switcher
function languageSlider() {
  var a = true;
  if (a === true) {
    romanianLanguage.classList.toggle("opaque-element");
    englishLanguage.classList.toggle("opaque-element");
    for (var i = 0; i < textElementsENG.length; i++) {
      textElementsENG[i].classList.toggle("hidden-link");
    }
    for (var i = 0; i < textElementsRO.length; i++) {
      textElementsRO[i].classList.toggle("hidden-link");
    }
  } else {
    englishLanguage.classList.toggle("opaque-element");
    romanianLanguage.classList.toggle("opaque-element");
    for (var i = 0; i < textElementsENG.length; i++) {
      textElementsENG[i].classList.toggle("hidden-link");
    }
    for (var i = 0; i < textElementsRO.length; i++) {
      textElementsRO[i].classList.toggle("hidden-link");
    }
  }
}
