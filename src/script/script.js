// ########### BURGER MENU ########### //
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.header-right');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('menu-link').forEach((n) =>
  n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  })
);

// ########### BLUESKY ICON ########### //
document.getElementById('bluesky').addEventListener('mouseover', function () {
  this.src = this.getAttribute('data-hover');
});

document.getElementById('bluesky').addEventListener('mouseout', function () {
  this.src = this.getAttribute('data-default');
});

document
  .getElementById('blueskyFooter')
  .addEventListener('mouseover', function () {
    this.src = this.getAttribute('data-hover');
  });

document
  .getElementById('blueskyFooter')
  .addEventListener('mouseout', function () {
    this.src = this.getAttribute('data-default');
  });

// ########### SEARCH BAR ########### //
function search() {
  const input = document.getElementById('search').value.toLowerCase();
  const items = document.querySelectorAll('.destination');
  for (i = 0; i < items.length; i++) {
    if (!items[i].innerHTML.toLowerCase().includes(input)) {
      items[i].hidden = true;
    } else {
      items[i].hidden = false;
    }
  }
}

// ########### BUTTON "ordre alphabétique" ########### //
let alphabeticOrderButton = document.getElementById('alphabeticOrderButton');
let iconContainer = alphabeticOrderButton.querySelector('svg');
let originalOrder = {}; // Stocke l'ordre original des éléments
let isSorting = false; // Empêche les appels multiples rapides

// Icônes SVG pour le tri
const iconAlpha = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sort-alpha-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10.082 5.629 9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371zm1.57-.785L11 2.687h-.047l-.652 2.157z"/>
  <path d="M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645zM4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293z"/>
</svg>`;

const iconNumeric = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sort-numeric-down-alt" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11.36 7.098c-1.137 0-1.708-.657-1.762-1.278h1.004c.058.223.343.45.773.45.824 0 1.164-.829 1.133-1.856h-.059c-.148.39-.57.742-1.261.742-.91 0-1.72-.613-1.72-1.758 0-1.148.848-1.836 1.973-1.836 1.09 0 2.063.637 2.063 2.688 0 1.867-.723 2.848-2.145 2.848zm.062-2.735c.504 0 .933-.336.933-.972 0-.633-.398-1.008-.94-1.008-.52 0-.927.375-.927 1 0 .64.418.98.934.98"/>
  <path d="M12.438 8.668V14H11.39V9.684h-.051l-1.211.859v-.969l1.262-.906h1.046zM4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293z"/>
</svg>`;

alphabeticOrderButton.innerHTML = iconAlpha;
alphabeticOrderButton.title = 'Trier par ordre alphabétique';

function alphabeticOrder() {
  if (isSorting) return;
  isSorting = true;

  const visibleGallery = document.querySelector('.image-gallery:not([hidden])');
  if (!visibleGallery || visibleGallery.id !== 'villes') {
    console.log("Aucune galerie visible ou la galerie n'est pas 'villes'");
    isSorting = false;
    return;
  }

  const carteItem = visibleGallery.querySelector('.destination-carte');
  const items = Array.from(visibleGallery.querySelectorAll('.destination'));
  if (items.length === 0) {
    console.log('Aucun élément trouvé dans la galerie');
    isSorting = false;
    return;
  }

  const galleryId = visibleGallery.id;

  if (!originalOrder[galleryId]) {
    originalOrder[galleryId] = [
      carteItem.cloneNode(true),
      ...items.map((item) => item.cloneNode(true)),
    ];
    visibleGallery.dataset.sorted = 'false';
  }

  setTimeout(() => {
    if (visibleGallery.dataset.sorted === 'false') {
      console.log('Trier les éléments');
      items.sort((a, b) => {
        const textA = a
          .querySelector('.overlay')
          .textContent.split('|')[0]
          .trim()
          .toLowerCase();
        const textB = b
          .querySelector('.overlay')
          .textContent.split('|')[0]
          .trim()
          .toLowerCase();
        return textA.localeCompare(textB);
      });
      visibleGallery.innerHTML = '';
      if (carteItem) visibleGallery.appendChild(carteItem);
      items.forEach((item) => visibleGallery.appendChild(item));
      visibleGallery.dataset.sorted = 'true';
      alphabeticOrderButton.innerHTML = iconNumeric;
      alphabeticOrderButton.title = 'Trier par ordre antéchronologique';
    } else {
      console.log("Revenir à l'ordre initial");
      visibleGallery.innerHTML = '';
      originalOrder[galleryId].forEach((item) =>
        visibleGallery.appendChild(item)
      );
      visibleGallery.dataset.sorted = 'false';
      alphabeticOrderButton.innerHTML = iconAlpha;
      alphabeticOrderButton.title = 'Trier par ordre alphabétique';
    }
    isSorting = false;
  }, 50);
}

alphabeticOrderButton.addEventListener('click', alphabeticOrder);

// ########### BUTTON "départements & régions" ########### //
let villes = document.getElementById('villesButton');
let departements = document.getElementById('departementsButton');
let regions = document.getElementById('regionsButton');

function sorting(category) {
  const items = document.querySelectorAll('.image-gallery');
  items.forEach((item) => {
    item.hidden = item.id !== category;
  });

  // Gérer la visibilité du bouton alphabétique
  alphabeticOrderButton.style.display =
    category === 'villes' ? 'block' : 'none';
}

villes.addEventListener('click', () => sorting('villes'));
departements.addEventListener('click', () => sorting('departements'));
regions.addEventListener('click', () => sorting('regions'));

// ########### BUTTON UP ########### //
// Get the upButton:
let upButton = document.getElementById('upButton');
// change nav bar on index page on scroll
let imgBrandIndex = document.getElementById('img-brand-index');
let brandPages = document.getElementById('brand-pages');
let index = document.getElementById('index');
// When the user scrolls down 50px from the top of the document
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    upButton.style.display = 'block';
  } else {
    upButton.style.display = 'none';
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// ########### disable save image option ########### //
$(document).on('contextmenu', 'img', function () {
  return false;
});
