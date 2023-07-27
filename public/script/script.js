//hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".header-right");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll("menu-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}));


// Get the upButton:
let upButton = document.getElementById("upButton");
// change nav bar on index page on scroll
let imgBrandIndex = document.getElementById("img-brand-index");
let brandPages = document.getElementById("brand-pages");
let index = document.getElementById("index");
// When the user scrolls down 50px from the top of the document
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    upButton.style.display = "block";
    imgBrandIndex.style.display = "none";
    brandPages.style.display = "block";
    index.style.backgroundImage = "url(images/header.png)";
  } else if($(window).width() < 700) {
    upButton.style.display = "none";
    imgBrandIndex.style.display = "none";
    brandPages.style.display = "block"
    index.style.backgroundImage = "none";
  } else {
    upButton.style.display = "none";
    imgBrandIndex.style.display = "block";
    brandPages.style.display = "none"
    index.style.backgroundImage = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


//disable save image option
$(document).on('contextmenu', 'img', function() {
	return false;
});
