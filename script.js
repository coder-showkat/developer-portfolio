const toggler = document.getElementById('toggle');

const navbar = document.getElementById('navbar');
const home = document.getElementById('home');

let toggleMenu = false;


toggler.addEventListener('click', () => {
    if (!toggleMenu) {
        navbar.classList.add('active');
        toggler.innerHTML = 'X'
        toggleMenu = true;
    } else {
        toggler.innerHTML = '<i class="fa-solid fa-bars"></i>'
        navbar.classList.remove('active');
        toggleMenu = false;
    }
})



