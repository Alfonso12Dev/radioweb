//<-Creamos un array definiendo las canciones a reproducir y agregamos algunos datos adicionales->
let All_song = [
   {
     name: "Before The Day Is Over",
     path: "https://thinknews.com.ng/wp-content/uploads/2022/11/Joji_Before_The_Day_Is_Over_(thinkNews.com.ng).mp3",
     img: "https://thinknews.com.ng/wp-content/uploads/2022/11/Joji-Before-The-Day-Is-Over-1-678x381.jpg",
     singer: "Joji"
   },
   {
     name: "Memories",
     path: "https://www.thinknews.com.ng/wp-content/uploads/2020/07/Maroon-5-Memories-01.mp3",
     img: "https://thinknews.com.ng/wp-content/uploads/2021/05/images282029.jpeg",
     singer: "Maroon 5"
   },
   {
     name: "Unholy",
     path: "https://www.thinknews.com.ng/wp-content/uploads/2022/09/Sam_Smith_Ft_Kim_Petras_-_Unholy_(thinknews.com.ng).mp3",
     img: "https://thinknews.com.ng/wp-content/uploads/2022/09/Sam-Smith-Unholy-Ft-Kim-Petras-1.jpg",
     singer: "Sam Smith & Kim Petras"
   },
   {
     name: "Glimpse of US",
     path: "https://thinknews.com.ng/wp-content/uploads/2022/11/Joji_Glimpse_of_US_(thinkNews.com.ng).mp3",
     img: "https://thinknews.com.ng/wp-content/uploads/2022/06/Joji-Glimpse-Of-Us-1-150x150.jpg",
     singer: "Joji"
   },
   {
     name: "Syn Cole - Feel Good",
     path: "https://thinknews.com.ng/wp-content/uploads/2022/08/Rema_Calm_Down_Remix__(thinkNews.com.ng).mp3",
     img: "https://thinknews.com.ng/wp-content/uploads/2022/08/Rema-Ft-Selena-Gomez-Calm-Down-Remix-1.jpg",
     singer: "Selena Gomez"
   },
   {
    name: "Youngblood",
    path: "https://fine.sunproxy.net/file/c3BlU2dSVDcyNWtQRmFLdTE4ZHl6bHE0bXhqOWFXMlpzTm9jK09vUDErb3VDdTQvcEo5RmdCcXVhaFZpNG15dVhsMVltaGovNDZVdjl6VUpteEJvSU01VVpHUDNhOTc0ZEw4LytwMVB3eDQ9/5_seconds_of_summer_-_youngblood_(ColdMP3.com).mp3",
    img: "https://cadena100-cdnmed.agilecontent.com/resources/jpg/5/2/1663928094825.jpg",
    singer: "5 Seconds of Summer"
   },
   {
    name: "Teeth",
    path: "https://fine.sunproxy.net/file/c3BlU2dSVDcyNWtQRmFLdTE4ZHl6bHE0bXhqOWFXMlpzTm9jK09vUDErcGFoaDU0U01zbUpmb3dLYytNL0lVL3RENnRhK0VWSEtiVC9LN3pnbW82VVkrN1pVcUtuVVN1bk9zZEVQY2ZkTEk9/5_seconds_of_summer_-_teeth_(ColdMP3.com).mp3",
    img: "https://cadena100-cdnmed.agilecontent.com/resources/jpg/5/2/1663928094825.jpg",
    singer: "5 Seconds of Summer"
   },
];

//<-Obtenemos la clase tracks y la iniciaremos a utilizar para añadir las canciones que definimos previamente en la variable all_song->
let tracks = document.querySelector('.tracks');

//<-Creamos una lista y generamos el respectivo código html->
for (let i = 0; i < All_song.length; i++) {

//<-Definimos el código html a añadir en el apartado del reproductor de la playlist->
let Html = `
<!--Añadimos la canción-->
<div class="song">

<!--Definimos la imagen de la canción a reproducir-->
<div class="img">
<img src="${All_song[i].img}"/>
</div>

<!--Definimos los demás datos de la canción-->
<div class="more">

<!--Añadimos la dirección de la canción-->
<audio src="${All_song[i].path}" id="music"></audio>

<!--Añadimos el nombre de la canción y su autor-->
<div class="song_info">
<p id="title">${All_song[i].name}</p>
<p>${All_song[i].singer}</p>
</div>

<!--Añadimos el botón para reproducir la canción y/o detenerla-->
<button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
</div>
</div>
`;

//<-En este lado básicamente hacemos un análisis a la cadena de texto introducida como cadena HTML o XML e insertamos al árbol DOM los nodos resultantes de dicho análisis en la posición especificada->
tracks.insertAdjacentHTML("beforeend", Html);
};
