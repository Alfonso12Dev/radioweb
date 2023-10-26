//<-Código que usa JQUERY, para la animación de moneda del logo del index->
$(document).ready(function($){

let flipResult = Math.random();
$('#coin').removeClass();
    
//<-Si flipResult es menor o igual que 0.5, añade la clase "1" (básicamente una animación)->
if(flipResult <= 0.5){
$('#coin').addClass('heads');
    
//<-Si la condición no se cumple,, añade la clase "1" (básicamente una animación)->
}else{
$('#coin').addClass('heads');
}
  
});

//<-Código para que se reproduzca un audio cuando se clickee un botón->
let detectar = document.querySelector('.links') 

detectar.addEventListener('click', function(){
let play = () => document.getElementById("audio").play()

play()
})


