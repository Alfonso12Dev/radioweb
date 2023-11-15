//<-El elemento de audio que checaremos-> 
let mensaje = document.querySelector('.creditos');

//<-Añadimos el mensaje de los créditos de la radio->
mensaje.innerHTML = `
<li><i class="fa-solid fa-crown fa-fade" style="color: #f1ff8a;"></i> | Brayan Grillet → <i class="remarcar">Programador Fullstack, administrador de las playlist, diseñador, redactor y tester</i></li>

<li>↓</li>

<li><i class="fa-solid fa-shield-halved fa-bounce" style="color: #6e737c;"></i> | Junior Macadan → <i class="remarcar">Especialista en redes, jefe de las transmisiones en vivo, aportes creativos y tester</i></li>

<li>↓</li>

<li><i class="fa-solid fa-gamepad fa-beat-fade" style="color: #cd7f32;"></i> | Darbys Romero → <i class="remarcar">Tester, aportes creativos</i></li>

<li>↓</li>

<li><i class="fa-solid fa-snowflake fa-beat" style="color: #381f51;"></i> | Jackson Valerio → <i class="remarcar">Tester, aportes creativos</i></li>

<li>↓</li>

<li><i class="fa-solid fa-headphones fa-fade" style="color: #ffffff;"></i> | Adrián Rodriguez → <i class="remarcar">Locutor</i></li>

<li>↓</li>

<li><i class="fa-solid fa-music fa-shake" style="color: #4be278;"></i> | Alexander Rondón → <i class="remarcar">Encargado del manejo de los en vivo</i></li>
`
