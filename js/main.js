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
  if(playing){
    audio.pause();
  }
  playing = !playing;
}
var setVolume = function (volumeValue) {
  audio.volume = volumeValue;
}

/*$(document).ready(function() {
  var icon = $('.play');
  icon.click(function() {
     icon.toggleClass('active');
     return false;
  });
});*/