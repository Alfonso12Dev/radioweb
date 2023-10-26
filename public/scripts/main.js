//<-Definimos las variables a utilizar (básicamente agarramos objetos de la web para modificarlo a nuestro antojo)->
let btn = document.querySelectorAll('.song #play_btn'), song = document.querySelectorAll('#music');

/*popup music player part*/
let p_m_player = document.querySelector('.popup_music_player'), down_player = document.querySelector('#down_player');
let current_track_name = document.querySelector('#current_track_name'), current_singer_name = document.querySelector('#current_singer_name');
let song_img = document.querySelector('.song_img');

/*Sección en donde obtenemos las variables de los controles del player*/
let play_pause_btn = document.querySelector('#play_pause_btn'), slider = document.querySelector('#slider');
let forward_btn = document.querySelector('#forward_btn'), backward_btn = document.querySelector('#backward_btn');

/*Sección en donde añadiremos la duración de la canción*/
let current_duration = document.querySelector('.controlls .progress_part #current_duration');
let total_duration = document.querySelector('.controlls .progress_part #total_duration');

/*Sección en donde obtenemos las Variables para el reproductor pequeño*/
let s_m_player = document.querySelector('.small_music_player'), playing_img = document.querySelector('.playing_img');
let wave_animation = document.querySelector('.wave_animation'), up_player = document.querySelector('#up_player');
let song_name = document.querySelector('#song_name'), artist_name = document.querySelector('#artist_name');

/*Valor por defecto de las variables*/
let is_song_played = false, song_status = false;
let index_no = 0;


btn.forEach((btn,index) => {
btn.addEventListener('click', function(){
s_m_player.style.transform = 'translateY(0px)';
    
//<-Si el index no es igual a index_no entonces el status de la canción es falso->
if(index != index_no) song_status = false;
    
//<-Definimos que index_no equivale a index->
index_no = index;

//<-Dentro de la variable song en el arreglo index, añadimos que el tiempo es 0->
song[index].currentTime = 0;

//<-Si el status de la canción es falso, entonces reproducimos la canción->
if(song_status == false) {
play_song();

}else{
pause_song();	 
  	}
  });
});


/*pause song*/
function pause_song(){
  song[index_no].pause();
  song_status = false;
  clearInterval(update_second);
  wave_animation.style.opacity = '0';
  play_pause_btn.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}


/*This function will update every 1s*/
 function update_second(){

	  let position = 0;

    // update slider position
		if(!isNaN(song[index_no].duration)){
		   position = song[index_no].currentTime * (100 / song[index_no].duration);
		   slider.value =  position;
	      }

    let durationMinutes = Math.floor(song[index_no].duration / 60);
    let durationSeconds = Math.floor(song[index_no].duration - durationMinutes * 60);
    total_duration.textContent = durationMinutes + ":" + durationSeconds;

    // Calculate the time left and the total duration
    let curr_minutes = Math.floor(song[index_no].currentTime / 60);
    let curr_seconds = Math.floor(song[index_no].currentTime - curr_minutes * 60);
 
    // Add a zero to the single digit time values
    if (curr_seconds < 10) { curr_seconds = "0" + curr_seconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
 
    // Display the updated duration
    current_duration.textContent = curr_minutes + ":" + curr_seconds;

       
// function will run when the song is over
	if (song[index_no].ended) {
      clearInterval(update_second);
  	  wave_animation.style.opacity = '0';
      play_pause_btn.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
    }
 }
 

/*show popup music player */
up_player.addEventListener('click', function(){
   p_m_player.style.transform = 'translateY(0%)';
});


/* Hide popup music player */
down_player.addEventListener('click', function(){
   p_m_player.style.transform = 'translateY(110%)';
});


/*play pause btn inside the popup Music player*/
play_pause_btn.addEventListener('click', function(){
    if (song_status == false) {
  		song[index_no].play();
      song_status = true;
      wave_animation.style.opacity = '1';
  		this.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
  	}else{
  		song[index_no].pause();
      song_status = false;
      wave_animation.style.opacity = '0';
      this.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
  	}
});


// change slider position 
function change_duration(){
	slider_position = song[index_no].duration * (slider.value / 100);
	song[index_no].currentTime = slider_position;
}


/*forward btn (next)*/
forward_btn.addEventListener('click', function(){
   
   index_no = index_no + 1;
    if (index_no == All_song.length) {
      index_no = 0;
    }
  
    song[index_no].currentTime = 0;
      play_song();
});


/*backward btn (previous)*/
backward_btn.addEventListener('click', function(){
    
    if (index_no == 0) {
      index_no = All_song.length-1;
    }else{
      index_no = index_no -1;
    }

    song[index_no].currentTime = 0;

    play_song();
});


/*play function*/
function play_song(){
  song[index_no].play();
  
  if (is_song_played == true) {
      document.querySelector(".active_song").pause();
      document.querySelector(".active_song").classList.remove("active_song");
  }else{
        is_song_played = true;
    }
    
  song[index_no].classList.add("active_song");

  song_status = true;
  setInterval(update_second, 1000);
  wave_animation.style.opacity = '1';
  p_m_player.style.transform = 'translateY(0%)';

  song_img.innerHTML = `<img src="${All_song[index_no].img}" />`;
  playing_img.innerHTML = `<img src="${All_song[index_no].img}" />`;

  song_name.innerHTML = All_song[index_no].name;
  artist_name.innerHTML = All_song[index_no].singer;

  current_track_name.innerHTML = All_song[index_no].name;
  current_singer_name.innerHTML = All_song[index_no].singer;
  play_pause_btn.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
}