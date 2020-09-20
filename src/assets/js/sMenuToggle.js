const sideMenu = document.querySelector('#side_menu');
const arrowMenu = document.querySelector('#hidden_img')

document.querySelector('#hidden_img').addEventListener('click', () => {
    sideMenu.classList.toggle('active');
    arrowMenu.classList.toggle('active');
});