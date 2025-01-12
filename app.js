const musicContainer = document.querySelector("#music-container");
const playBtn = document.querySelector("#play");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");

const audio = document.querySelector("#music");
const progress = document.querySelector("#progress");
const progressContainer = document.querySelector("#progress-container");
const title = document.querySelector("#title");
const cover = document.querySelector("#cover");

const songs = ["Adam - Zhurek.mp3", "Eminem_Rihanna_-_Love_The_Way_You_Lie_47965688.mp3", "Ricky Rich, Dardan - Habibi.mp3"];
let songIndex = 0;

loadSong(songs[songIndex]);
function loadSong(song) {
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.png`;
}



