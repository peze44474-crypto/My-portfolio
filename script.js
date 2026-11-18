
// MOBILE MENU FUNCTIONALITY

const menuTrigger = document.getElementById('menuTrigger');
const triggerText = document.getElementById('triggerText');
const sideDrawer = document.getElementById('sideDrawer');
const drawerBackdrop = document.getElementById('drawerBackdrop');
const drawerLinks = document.querySelectorAll('.drawer-link');

function setMenuState(open) {

    menuTrigger.classList.toggle('is-open', open);
    sideDrawer.classList.toggle('is-open', open);
    drawerBackdrop.classList.toggle('is-open', open);

    menuTrigger.setAttribute('aria-expanded', open);
    sideDrawer.setAttribute('aria-hidden', !open);

    triggerText.textContent = open ? '' : '';

    document.body.style.overflow = open ? 'hidden' : '';
}

menuTrigger.addEventListener('click', () => {
    const isOpen = sideDrawer.classList.contains('is-open');
    setMenuState(!isOpen);
});

drawerBackdrop.addEventListener('click', () => {
    setMenuState(false);
});

drawerLinks.forEach((link) => {
    link.addEventListener('click', () => {
        setMenuState(false);
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sideDrawer.classList.contains('is-open')) {
        setMenuState(false);
    }
});
