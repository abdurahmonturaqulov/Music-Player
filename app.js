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

playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play')
  if (isPlaying) {
    pauseSong()
  } else {
    playSong()
  }
})

function playSong () {
  musicContainer.classList.add('play')
  playBtn.querySelector('i.fas').classList.remove('fa-play')
  playBtn.querySelector('i.fas').classList.add('fa-pause')
  audio.play()
}

function pauseSong () {
  musicContainer.classList.remove('play')
  playBtn.querySelector('i.fas').classList.add('fa-play')
  playBtn.querySelector('i.fas').classList.remove('fa-pause')
  audio.pause()
}

prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)

function prevSong () {
  songIndex--
  if (songIndex < 0) {
    songIndex = songs.length - 1
  }
  loadSong(songs[songIndex])
  playSong()
}
function nextSong () {
  songIndex++
  if (songIndex > songs.length - 1) {
    songIndex = 0
  }
  loadSong(songs[songIndex])
  playSong()
}

audio.addEventListener('timeupdate', updateProgress)
function updateProgress (e) {
  const { duration, currentTime } = e.srcElement

  const progressPercent = (currentTime / duration) * 100
  progress.style.width = `${progressPercent}%`
}

progressContainer.addEventListener('click', setProgress)
function setProgress (e) {
  const width = this.clientWidth
  const click = e.offsetX
  const duration = audio.duration
  audio.currentTime = (click / width) * duration
}
