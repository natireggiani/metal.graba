
//NAVBAR RESPONSIVE

let menu = document.querySelector('.menu') 
let ul = document.querySelector('#lista-menu') 
let navPage = document.querySelector('.nav-pages')

menu.addEventListener('click', function(){
    ul.classList.toggle('none');
    navPage.classList.toggle('nav-pages_black');
})

//FIN NAVBAR RESPONSIVE




