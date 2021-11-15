function createMusic(name, author, photo, file) {
  let music = {
    "name": name,
    "author": author,
    "photo": photo,
    "file": file
  }
  return music
}

var audio = new Audio();
var music_time = "";

const play_click = document.getElementById("play-stop")
const photo_music = document.getElementById("photo_music")
const title_music = document.getElementById("title_music")
const author_music = document.getElementById("author_music")

const next = document.getElementById("next")
const prev = document.getElementById("prev")

var mina_feia = createMusic("Mina Feia", "Seu jorge", "music/Seu jorge/mina_feia/mina_feia.jpeg", "music/Seu jorge/mina_feia/mina_feia.mp3")
var mina_do_condominio = createMusic("Mina do Condominio", "Seu jorge", "music/Seu jorge/mina_do_condominio/mina_do_condominio.jpg", "music/Seu jorge/mina_do_condominio/mina_do_condominio.mp3")
var she_knows = createMusic("She Knows", "J. cole", "music/J. cole/she_knows/she_knows.jpg", "music/J. cole/she_knows/she_knows.mp3")

var songs = [mina_feia, mina_do_condominio, she_knows]

var currentSound = 0
var max_music = 0

for(let i=0;i<=songs;i++) {
  var max_music = i-1
}

function nextSound() {
  if(currentSound != max_music) {
    currentSound += 1
    play()
  }else{
    play()
  }
}

function prevSound() {
  currentSound -= 1
  play()
}

function play() {
  play_click.src = "img/pause.ico";
  audio.src = songs[currentSound].file
  title_music.textContent = songs[currentSound].name
  photo_music.src = songs[currentSound].photo
  author_music.textContent = songs[currentSound].author
  audio.play();
}

play();

function play_pause() {
  if(audio.paused) {
    play_click.src = "img/pause.ico"
    audio.src = songs[currentSound].file
    audio.currentTime = music_time
    audio.play();
  }else{
    play_click.src = "img/play.ico"
    music_time = audio.currentTime
    audio.pause();
  }
}

play_click.addEventListener("click", play_pause)
prev.addEventListener("click", prevSound)
next.addEventListener("click", nextSound)