const container = document.querySelector(".container");
const image = document.querySelector("#music_image");
const title = document.querySelector(".title");
const singer = document.querySelector(".singer");
const prev = document.querySelector("#prev");
const play = document.querySelector("#play");
const next = document.querySelector("#next");
const duration = document.querySelector("#duration");
const currentTime = document.querySelector("#current_time");
const progressBar = document.querySelector("#progress_bar");
const volume = document.getElementById("volume");
const volumeBar = document.getElementById("volume-bar");
const repeat = document.querySelector("#repeat");

const player= new MusicPlayer(musicList);

window.addEventListener("load", ()=>{
    let music =  player.getMusic();
    displayMusic(music);
});

function displayMusic(music){
    title.innerText=music.title;
    singer.innerText=music.singer;
    image.src = "img/" + music.img;
    audio.src="mp3/" + music.file

};

play.addEventListener("click", ()=>{
    const isMusicPlay = container.classList.contains("playing");
    isMusicPlay ? pauseMusic() : playMusic();

});

prev.addEventListener("click", ()=>{
    prevMusic();
});
next.addEventListener("click", ()=>{
    nextMusic();
   
});

function prevMusic(){
    player.prev();
    let music = player.getMusic();
    displayMusic(music);
    playMusic();
};

function nextMusic(){
    player.next();
    let music = player.getMusic();
    displayMusic(music);
    playMusic();
};

function pauseMusic(){
        container.classList.remove("playing");
        play.classList="fa-solid fa-play";
        audio.pause();
};
function playMusic(){
        container.classList.add("playing");
        play.classList="fa-solid fa-pause";
        audio.play();
};

const calculateTime = (seconds) =>{
    const minute = Math.floor(seconds/60);
    const second = Math.floor(seconds %60);
    const editedSecond = second <10 ? `0${second}` : `${second}`;
    const result = `${minute}:${editedSecond}`;
    return result;

};

audio.addEventListener("loadedmetadata",()=>{
    duration.textContent= calculateTime(audio.duration);
    progressBar.max = Math.floor(audio.duration);
});

audio.addEventListener("timeupdate", ()=>{
    progressBar.value = Math.floor(audio.currentTime);
    currentTime.textContent=calculateTime(progressBar.value);
})

progressBar.addEventListener("input",()=>{
    currentTime.textContent=calculateTime(progressBar.value);
    audio.currentTime=progressBar.value;
});

let volumeState= "unmuted";

volumeBar.addEventListener("input", (v)=>{
    const value = v.target.value;
    audio.volume = value/100;
    if(value==0){
        audio.muted=true;
        volumeState="muted";
        volume.classList="fa-solid fa-volume-xmark";

    }
    
    else{
        audio.muted=false;
        volumeState="unmuted";
        volume.classList="fa-solid fa-volume-high";
    }
    

});

volume.addEventListener("click", ()=>{
    if(volumeState==="unmuted"){
        audio.muted=true;
        volumeState="muted";
        volume.classList="fa-solid fa-volume-xmark";
        volumeBar.value=0;
    }
    else{
        audio.muted=false;
        volumeState="unmuted";
        volume.classList="fa-solid fa-volume-high";
        volumeBar.value=100;
    }
});

