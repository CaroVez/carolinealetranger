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



//sliders
$(document).ready(function(){  
  $('.slider').slick({
    dots: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    mobileFirst: true
  });
});



//disable save image option
$(document).on('contextmenu', 'img', function() {
	return false;
});



//comment section
//var feild = document.querySelector('.container textarea');
//var backUp = feild.getAttribute('placeholder');
//var btn = document.querySelector('.container .btn');
//var clear = document.getElementById('clear');
//
//feild.onfocus = function() {
//  this.setAttribute('placeholder', '');
//  this.style.borderColor = '#333';
//  btn.style.display = 'block';
//}
//
//feild.onblur = function() {
//  this.setAttribute('placeholder', backUp);
//  this.style.borderColor = '#aaa'
//}
//
//clear.onclick = function() {
//  btn.style.display = 'none';
//  feild.value = '';
//}