// ########### BUTTONS ########### //
const all = document.querySelector('.all');
const twentythree = document.querySelector('.twentythree');
const twentytwo = document.querySelector('.twentytwo');
const twentyone = document.querySelector('.twentyone');

// ########### SORTING ########### //
function sortingItems(year) {
  const items = document.querySelectorAll(".text-muted");
  for (let i = 0; i < items.length; i++) {       
    if (!items[i].innerText.includes(year)) {
      items[i].parentElement.parentElement.parentElement.hidden = true;
    } else {
      items[i].parentElement.parentElement.parentElement.hidden = false;
    }  
  }  
};

// ########### EVENT ON CLICK ########### //
all.addEventListener('click', () => {
  const items = document.querySelectorAll(".text-muted");
  for (let i = 0; i < items.length; i++) {    
    items[i].parentElement.parentElement.parentElement.hidden = false;
  }  
});

twentythree.addEventListener('click', () => {
  sortingItems("2023");
});

twentytwo.addEventListener('click', () => {
  sortingItems("2022");
});

twentyone.addEventListener('click', () => {
  sortingItems("2021");
});

// ########### SEARCH BAR ########### //
function search() {
  const input = document.getElementById('search').value.toLowerCase();
  const items = document.querySelectorAll(".col");  
  for (i = 0; i < items.length; i++) {
    if (!items[i].innerText.toLowerCase().includes(input)) {
      items[i].hidden = true;
    } else {
      items[i].hidden = false;
    }
  }
}


// ########### TEMPORARY POPOVER ########### //
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
