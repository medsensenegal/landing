const menu = document.querySelector('.menu');
const navbar = document.querySelector('.navbar');
const menuIcon = document.querySelector('.menu i');

menu.addEventListener('click', () => {
    navbar.classList.toggle('open');
    
    if (menuIcon.classList.value.includes('fa-bars')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-xmark');
    } else {
        menuIcon.classList.add('fa-bars');
        menuIcon.classList.remove('fa-xmark');
    }
});