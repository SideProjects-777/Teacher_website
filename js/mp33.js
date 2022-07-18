let track_name = document.querySelector(".track-name-1");
let playpause_btn = document.querySelector(".playpause-track-1");
let seek_slider = document.querySelector(".seek_slider-1");
let volume_slider = document.querySelector(".volume_slider-1");
let curr_time = document.querySelector(".current-time-1");
let total_duration = document.querySelector(".total-duration-1");

let track_index = 0;
let isPlaying = false;
let updateTimer;

// Create new audio element
let curr_track = document.createElement('audio');

// Define the tracks that have to be played
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


function loadTrack1(track_index) {
  clearInterval1(updateTimer);
  resetValues1();
  curr_track.src = track_list[track_index].path;
  curr_track.type = track_list[track_index].extension;
  curr_track.load();
  track_name.textContent = track_list[track_index].name;

  updateTimer = setInterval(seekUpdate, 1000);
}

function resetValues1() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}

function playpauseTrack1() {
  if (!isPlaying) playTrack1();
  else pauseTrack1();
}

function playTrack1() {
  curr_track.play();
  isPlaying = true;
  playpause_btn.innerHTML = '<i class="bi bi-pause iconsSize"></i>';
}

function pauseTrack1() {
  curr_track.pause();
  isPlaying = false;
  playpause_btn.innerHTML = '<i class="bi bi-play iconsSize"></i>';;
}

function seekTo1() {
  let seekto = curr_track.duration * (seek_slider.value / 100);
  curr_track.currentTime = seekto;
}

function setVolume1() {
  curr_track.volume = volume_slider.value / 100;
}

function seekUpdate1() {
  let seekPosition = 0;

  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);

    seek_slider.value = seekPosition;

    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}


