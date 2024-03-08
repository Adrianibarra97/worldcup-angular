var menuOpen = false

function menuAction() {
    const menu = document.getElementById('menu')
    if(menuOpen) menu.style.height = '8%'
    else menu.style.height = 'auto'
    menuOpen = !menuOpen
}