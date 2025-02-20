const menuButton = document.getElementById('menu-button');
const menuList = document.getElementById('menu-list');

        document.addEventListener('click', (event) => {
    if (!menuButton.contains(event.target) && !menuList.contains(event.target)) {
        menuList.style.display = 'none';
    }
});