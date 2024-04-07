const hamberger = document.getElementById('hamberger');
const menuList = document.getElementById('menu-list');
const logo = document.getElementById('logo');



hamberger.addEventListener('click', () =>{
    menuList.classList.toggle("hidden");
    logo.style.display = 'none';
    hamberger.style.alignItems = 'start';
    
})





