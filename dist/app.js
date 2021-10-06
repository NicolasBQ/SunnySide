const nav__menu = document.getElementById('nav-menu'),
      nav__toggle = document.getElementById('nav-toggle');

nav__toggle.addEventListener('click', () => {
    nav__menu.classList.toggle('show-menu')
})