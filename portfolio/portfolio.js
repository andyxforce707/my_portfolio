// sidebar
const tombol_sidebar = document.querySelector('#container .navbar .hamburger img');
const area_sidebar = document.querySelector('#container .sidebar');

tombol_sidebar.addEventListener('click', () => {
  area_sidebar.classList.toggle('active');
  if (area_sidebar.classList.contains('active')) {
    tombol_sidebar.src = 'icon/icon-back.png';
  } else {
    tombol_sidebar.src = 'icon/icon-hamburger.png';
  }
});

// search

const tombol_search = document.querySelector('#container .navbar ul img');
const search_bar = document.querySelector('#container .main form');
const search = document.querySelector('#container .main form input');

tombol_search.addEventListener('click', () => {
  search.focus();
  search_bar.classList.toggle('active');
});
