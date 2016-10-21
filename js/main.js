var nameTrack = "";
var urlTrack = "";
var durationTrack = 0;
var playing = false;
var playType = ['Normal', 'Random'];
var audio;
var nmbSong;

var songs = [];
var gender = [];
var artist = [];
var playList = [];

var play;
var pause;
var stop;

document.addEventListener('DOMContentLoaded', initPage);

function initPage() {
  audio = new Audio();
  songs = document.querySelectorAll("#playList li");
  song = Array.from(songs);
  nmbSong = 0;

  nameTrack = songs[nmbSong].textContent;
  urlTrack = songs[nmbSong].getAttribute('value');

  play = document.querySelector(".icon-play");
  pause = document.querySelector(".icon-pause");
  stop = document.querySelector(".icon-stop");

  showControls();
}

var showControls = function (){
  play.style.display = playing ? "none" : "";
  pause.style.display = playing ? "" : "none";
  stop.style.display = playing ? "" : "none";
}

var playSong = function() {
  audio.src = urlTrack;
  if(playing){
    audio.pause();
  }else{
    audio.play();
  }
  playing = !playing;

  showControls();  
};
var nextSong = function () {
  if(playing){
    audio.pause();
  }
  nmbSong++;

  urlTrack = songs[nmbSong].getAttribute('value');
  audio.src = urlTrack;
  audio.play();
};
var prevSong = function () {
  if(playing){
    audio.pause();
  }
  nmbSong--;
  
  urlTrack = songs[nmbSong].getAttribute('value');
  audio.src = urlTrack;
  audio.play();
}
var stopPlay = function () {
  audio.pause();
  audio = new Audio();
  playing = !playing;
  showControls();  
}
var setVolume = function (volumeValue) {
  audio.volume = volumeValue;  
}
