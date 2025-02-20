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

const sections = document.querySelectorAll('.Header1, .Header2, .Header3, .Header4, .Contact');

sections.forEach(section => {
    const header = section.querySelector('h1');
    header.addEventListener('click', () => {
        section.classList.toggle('show');
    });
});
