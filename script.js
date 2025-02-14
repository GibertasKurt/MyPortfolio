const menuButton = document.getElementById('menu-button');
const menuList = document.getElementById('menu-list');

menuButton.addEventListener('click', (event) => {
    event.stopPropagation();
    menuList.classList.toggle('show');
});

document.addEventListener('click', (event) => {
    if (!menuButton.contains(event.target) && !menuList.contains(event.target)) {
        menuList.classList.remove('show');
    }
});
