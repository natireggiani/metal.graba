
//NAVBAR RESPONSIVE

let menu = document.querySelector('.menu') 
let ul = document.querySelector('#lista-menu') 
let navPage = document.querySelector('.nav-pages')

menu.addEventListener('click', function(){
    ul.classList.toggle('none');
    navPage.classList.toggle('nav-pages_black');
})

//FIN NAVBAR RESPONSIVE



//MODAL

let control = document.querySelector('#show-modal')
let modal = document.querySelector('.modal')
let cruz = document.querySelector('.cruz')

control.addEventListener('click', function(){
    modal.classList.remove('modal-hide')  
})

cruz.addEventListener('click', function(){
    modal.classList.add('modal-hide')
})

// FIN MODAL
