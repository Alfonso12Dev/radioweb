//<--/////Sistema para Evitar zoom/////-->


//<-Cuando detectemos que el usuario trate de hacer zoom, ejecutamos el siguiente código->
$(document).keydown(function(event) {

//<--Lista de teclas que mayormente se usan para zoom-->

// 107 Num Key  +
// 109 Num Key  -
// 173 Min Key  hyphen/underscore key
// 61 Plus key  +/= key


//<-Si el usuario llega a presionar alguna de esas letras, previene el zoom->
if(event.ctrlKey == true && (event.which == '61' || event.which == '107' || event.which == '173' || event.which == '109'  || event.which == '187'  || event.which == '189')) {

//<-Prevenimos el zoom->
event.preventDefault();
    
    }
});

//<-Lo mismo aplica aquí, pero con el mouse->
$(window).bind('mousewheel DOMMouseScroll', function (event) {
    
//<-Si el usuario tiene la tecla control presionada y hace zoom con el mouse, entonces prevenimos el zoom->
if(event.ctrlKey == true) {
    
//<-Prevenimos el zoom->
event.preventDefault();
    
}
 });


