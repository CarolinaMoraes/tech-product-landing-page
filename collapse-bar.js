const $menu = document.querySelector('.toggle-menu');
const $menuItems = document.querySelector('.collapsed-list');
const $topScreen = document.querySelector('hero');


window.addEventListener('click', function (e) {

    if ($menu.contains(e.target) && $menu.textContent != 'CLOSE') {
        showMenu();
    }

    else {
        hideMenu();
    }

});

function showMenu() {
    $menuItems.classList.remove('hidden');
    $menuItems.classList.add('shown');
    $menu.textContent != 'CLOSE' ? $menu.textContent = 'CLOSE' : $menu.textContent = 'MENU';
}

function hideMenu() {
    $menuItems.classList.remove('shown');
    $menuItems.classList.add('hidden');
    $menu.textContent != 'MENU' ? $menu.textContent = 'MENU' : $menu.textContent = $menu.textContent;
}


