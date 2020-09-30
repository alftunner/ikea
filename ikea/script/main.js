//day1
'use strict';

const btnBurger = document.querySelector('.btn-burger');
const catalog = document.querySelector('.catalog');
const btnClose = document.querySelector('.btn-close'); 
const subCatalog = document.querySelector('.subcatalog');
const btnReturn = document.querySelector('.btn-return');
const subCatalogHeader = document.querySelector('.subcatalog-header');

const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.insertAdjacentElement('beforeend', overlay);

const openMenu = () => {
    catalog.classList.add('open');
    overlay.classList.add('active');
};
const closeMenu = () => {
    catalog.classList.remove('open');
    overlay.classList.remove('active');
    subCatalog.classList.remove('subopen');
    closeSubMenu();
};
const openSubMenu = (event) => {
    event.preventDefault();
    const itemList = event.target.closest('.catalog-list__item');
    if(itemList){
        subCatalogHeader.innerHTML = itemList.innerHTML;
        subCatalog.classList.add('subopen');
    }
};
const closeSubMenu = () => {
    subCatalog.classList.remove('subopen');
}


btnBurger.addEventListener('click', openMenu);
btnClose.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);
catalog.addEventListener('click', openSubMenu);
btnReturn.addEventListener('click', closeSubMenu);