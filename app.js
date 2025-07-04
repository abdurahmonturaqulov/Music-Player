const musicContainer = document.querySelector('#music-container')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')

const audio = document.querySelector('#music')
const progress = document.querySelector('#progress')
const progressContainer = document.querySelector('#progress-container')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')

const songs = [
  'adam.mp3',
  'Arabic Music',
  'Eminem Rihanna.mp3',
  'SEVARA.mp3',
  'Snoop Dogg.mp3'
]

let songIndex = 0

loadSong(songs[songIndex])

function loadSong (song) {
  title.innerText = song
  audio.src = `music/${song}.mp3`
  cover.src = `images/${song}.png`
}
