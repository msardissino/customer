const $btnMenu = document.querySelector('#btnMenu');
const $aside = document.querySelector('#aside');
console.log($btnMenu);

$btnMenu.addEventListener('click',hideShow);

function hideShow(){
    $aside.classList.toggle('activeMenu');
}