let track_name_2 = document.querySelector(".track-name-2");
let playpause_btn_2 = document.querySelector(".playpause-track-2");
let seek_slider_2 = document.querySelector(".seek_slider-2");
let volume_slider_2 = document.querySelector(".volume_slider-2");
let curr_time_2 = document.querySelector(".current-time-2");
let total_duration_2 = document.querySelector(".total-duration-2");

let track_index_2 = 0;
let isPlaying_2 = false;
let updateTimer_2;

// Create new audio element
let curr_track_1 = document.createElement('audio');

// Define the tracks that have to be played
/*
let track_list = [
  {
    name: "Alphabet",
    path: "./assets/mp3/Das-deutsche-Alphabet.aac",
    extension: "audio/ogg"
  },
  {
    name: "Alphabet 1",
    path: "./assets/mp3/1.ogg",
    extension: "audio/ogg"
  },
  {
    name: "Alphabet 2",
    path: "./assets/mp3/2.ogg",
    extension: "audio/ogg"
  },
];
*/

function loadTrack2(track_index_2) {
  clearInterval(updateTimer_2);
  resetValues2();
  curr_track_1.src = track_list[track_index_2].path;
  curr_track_1.type = track_list[track_index_2].extension;
  curr_track_1.load();
  track_name_2.textContent = track_list[track_index_2].name;

  updateTimer_2 = setInterval(seekUpdate2, 1000);
}

function resetValues2() {
  curr_time_2.textContent = "00:00";
  total_duration_2.textContent = "00:00";
  seek_slider_2.value = 0;
}

function playpauseTrack2() {
  if (!isPlaying_2) playTrack2();
  else pauseTrack2();
}

function playTrack2() {
  curr_track_1.play();
  isPlaying_2 = true;
  playpause_btn_2.innerHTML = '<i class="bi bi-pause iconsSize"></i>';
}

function pauseTrack2() {
  curr_track_1.pause();
  isPlaying_2 = false;
  playpause_btn_2.innerHTML = '<i class="bi bi-play iconsSize"></i>';;
}

function seekTo2() {
  let seekto = curr_track_1.duration * (seek_slider_2.value / 100);
  curr_track_1.currentTime = seekto;
}

function setVolume2() {
  curr_track_1.volume = volume_slider_2.value / 100;
}

function seekUpdate2() {
  let seekPosition = 0;

  if (!isNaN(curr_track_1.duration)) {
    seekPosition = curr_track_1.currentTime * (100 / curr_track_1.duration);

    seek_slider_2.value = seekPosition;

    let currentMinutes = Math.floor(curr_track_1.currentTime / 60);
    let currentSeconds = Math.floor(curr_track_1.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(curr_track_1.duration / 60);
    let durationSeconds = Math.floor(curr_track_1.duration - durationMinutes * 60);

    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

    curr_time_2.textContent = currentMinutes + ":" + currentSeconds;
    total_duration_2.textContent = durationMinutes + ":" + durationSeconds;
  }
}


