//<--Código para el navbar (se ajuste automaticamente)-->
const navbar = document.querySelector('.navbar');

//<-Buscamos la clase "toggle" y si detectamos un evento (en este caso click, ejecutamos el siguiente código)->
navbar.querySelector('.toggle').addEventListener('click',()=>{

navbar.classList.toggle('collapsed')});

//<-Detectamos si en la pagina hacen "scroll", entonces ejecutamos el siguiente código para adaptar el nav->
window.addEventListener('scroll', () => {

//<-Obtenemos la posición de la ventana y la altura->
let windowY = window.pageYOffset, navbarHeight = document.querySelector('.navbar').offsetHeight;

//<-Si la posición de la ventaja es mayor que la altura hacemos que el navegador se adapte automaticamente->
if(windowY > navbarHeight) navbar.classList.add('sticky')
else navbar.classList.remove('sticky');
	
});