let menu = document.querySelector('.menu') 
let ul = document.querySelector('#lista-menu') 
let navPage = document.querySelector('.nav-pages')

menu.addEventListener('click', function(){
    ul.classList.toggle('none');
    navPage.classList.toggle('nav-pages_black');
})





let items = document.querySelectorAll('.listas')
console.log(items)


items.forEach(el=>{
    el.addEventListener('click', function(e){
        e.preventDefault();
        items.forEach(el => el.classList.remove('color'))
        this.classList.add('color')
    })
})
