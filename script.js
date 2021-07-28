const menu = document.getElementById('menu');
const menuIcon = document.querySelector('#menu i');
const nav = document.querySelector('nav');

menu.addEventListener('click', () =>{
    nav.classList.toggle('active');

    if (menuIcon.className == 'fas fa-bars') {
        menuIcon.className = 'fas fa-times';
    }
    else if(menuIcon.className == 'fas fa-times') {
        menuIcon.className = 'fas fa-bars';
    }
})
