// ########### BURGER MENU ########### //
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


// ########### SEARCH BAR ########### //
function search() {
  const input = document.getElementById('search').value.toLowerCase();
  const items = document.querySelectorAll(".destination");
  for (i = 0; i < items.length; i++) {
    if (!items[i].innerHTML.toLowerCase().includes(input)) {
      items[i].hidden = true;
    } else {
      items[i].hidden = false;
    }
  }
}


// ########### BUTTON "ordre alphabétique" ########### //
let alphabeticOrderButton = document.getElementById("alphabeticOrderButton");

function alphabeticOrder() {
  const array = [];
  const item = document.querySelectorAll(".destination");
  for (let i = 0; i < item.length; i++) {
    array.push(item[i].innerHTML);
  }  
  
  // ??? trier les items selon le contenu entre les caractères | | ???
  array.sort();
  for (let i = 0; i < array.length; i++) {
    item[i].innerHTML = array[i];
  }
}


// ########### BUTTON "départements & régions" ########### //
let villes = document.getElementById("villesButton");
let departements = document.getElementById("departementsButton");
let regions = document.getElementById("regionsButton");

function sorting(category) {
  const items = document.querySelectorAll(".image-gallery");
  for (let i = 0; i < items.length; i++) {
    if (items[i].id != category) {
      items[i].hidden = true;
    } else {
      items[i].hidden = false;
    }
  }
};

villes.addEventListener('click', () => {
  sorting('villes');
});
departements.addEventListener('click', () => {
  sorting('departements');
});
regions.addEventListener('click', () => {
  sorting('regions');
});


// ########### BUTTON UP ########### //
// Get the upButton:
let upButton = document.getElementById("upButton");
// change nav bar on index page on scroll
let imgBrandIndex = document.getElementById("img-brand-index");
let brandPages = document.getElementById("brand-pages");
let index = document.getElementById("index");
// When the user scrolls down 50px from the top of the document
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    upButton.style.display = "block";
  } else {
    upButton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// ########### disable save image option ########### //
$(document).on('contextmenu', 'img', function() {
	return false;
});
