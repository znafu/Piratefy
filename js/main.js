var nameTrack, urlTrack, nmbSong;
var durationTrack = 0;
var playing = false;
var playType = ['Normal', 'Random'];
var audio;

var songs = [];
var gender = [];
var artist = [];
var playList = [];

var nameSong;
var play;
var pause;
var stop;
var muted;
var volumeB;

document.addEventListener('DOMContentLoaded', initPage) ;

function initPage() {
  audio = new Audio();
  songs = document.querySelectorAll("#playList li");
  songs = Array.from(songs);
  nmbSong = 0;

  nameTrack = songs[nmbSong].textContent;
  urlTrack = songs[nmbSong].getAttribute('value');

  play = document.querySelector(".icon-play");
  pause = document.querySelector(".icon-pause");
  stop = document.querySelector(".icon-stop");
  muted = document.querySelector("#muted");
  volumeB = document.querySelector("#volumeB");
  nameSong = document.querySelector(".audio-player>h2");

  nameSong.textContent = "";
  muted.style.display= "none";
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

  nameSong.textContent = songs[nmbSong].textContent;
  showControls();  
};
var nextSong = function () {
  if(playing){
    audio.pause();
  }
  nmbSong++;

  nameSong.textContent = songs[nmbSong].textContent;
  urlTrack = songs[nmbSong].getAttribute('value');
  audio.src = urlTrack;
  audio.play();
};
var prevSong = function () {
  if(playing){
    audio.pause();
  }
  nmbSong--;
  
  nameSong.textContent = songs[nmbSong].textContent;
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
var mute = function() {
    audio.muted = !audio.muted;
    if (audio.muted === true){
        muted.style.display = "";
        volumeB.style.display = "none";
    }else{
        muted.style.display = "none";
        volumeB.style.display = "";
    }
}

/*
var setVolume = function (volumeValue) {
  audio.volume = volumeValue;  
}

//VOLUME BAR
//volume bar event
var volumeDrag = false;
$('.volume').on('mousedown', function (e) {
    volumeDrag = true;
    audio.muted = false;
    $('.sound').removeClass('muted');
    updateVolume(e.pageX);
});
$(document).on('mouseup', function (e) {
    if (volumeDrag) {
        volumeDrag = false;
        updateVolume(e.pageX);
    }
});
$(document).on('mousemove', function (e) {
    if (volumeDrag) {
        updateVolume(e.pageX);
    }
});
var updateVolume = function (x, vol) {
    var volume = $('.volume');
    var percentage;
    //if only volume have specificed
    //then direct update volume
    if (vol) {
        percentage = vol * 100;
    } else {
        var position = x - volume.offset().left;
        percentage = 100 * position / volume.width();
    }

    if (percentage > 100) {
        percentage = 100;
    }
    if (percentage < 0) {
        percentage = 0;
    }

    //update volume bar and video volume
    $('.volumeBar').css('width', percentage + '%');
    audio.volume = percentage / 100;

    //change sound icon based on volume
    if (audio.volume == 0) {
        $('.sound').removeClass('sound2').addClass('muted');
    } else if (audio.volume > 0.5) {
        $('.sound').removeClass('muted').addClass('sound2');
    } else {
        $('.sound').removeClass('muted').removeClass('sound2');
    }

};*/