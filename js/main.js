var nameTrack = "";
var urlTrack = "";
var durationTrack = 0;
var playing = false;
var playType = ['Normal', 'Random'];
var audio;
var songs;
var nmbSong;

var play;
var prev;
var next;

document.addEventListener('DOMContentLoaded', initPage);

function initPage() {
  audio = new Audio();
  songs = document.querySelectorAll("#playList li");
  song = Array.from(songs);
  nmbSong = 0;

  nameTrack = songs[nmbSong].textContent;
  urlTrack = songs[nmbSong].getAttribute('value');

  play = document.getElementById("play");
  play.addEventListener('click', playSong);

  prev = document.getElementById("prev");
  prev.addEventListener('click', function(){

  });

  next = document.getElementById("next");
  next.addEventListener('click', nextSong);
}

var playSong = function() {
  audio.src = urlTrack;
  if(playing){
    audio.pause();
  }else{
    audio.play();
  }
  playing = !playing;
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
