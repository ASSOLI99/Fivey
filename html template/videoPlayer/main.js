// myVars
let player=document.querySelector(".player");
let video=player.querySelector(".viewer");
let progress=player.querySelector(".progress");
let progressBar=player.querySelector(".progress .progress__filled");
let toggle=player.querySelector(".toggle");
let skipButtons=player.querySelectorAll("[data-skip]");
let ranges=player.querySelectorAll(".player__slider");
let muteBtn=player.querySelector(".mute-btn");
let muteBtn_icon=muteBtn.querySelector("i")
let fullScreen=player.querySelector(".fullScreen")
// functions
function togglePlay(){
    if(video.paused){
        video.play();
        toggle.innerHTML='❚ ❚';
    }else{
        video.pause();
        toggle.innerHTML='►';
    }
};
function skip(){
video.currentTime += parseFloat(this.dataset.skip);
};
function handleRange(){
video[this.name]=this.value;
};
function handleProgress(){
    let percent=(video.currentTime / video.duration)*100;
    progressBar.style.flexBasis = `${percent}%`;
}
function scrub(e){
    let scrubTime=(e.offsetX/progress.offsetWidth)*video.duration;
video.currentTime=scrubTime;

}
function muting(){
video.muted=!video.muted
if(video.muted){
    muteBtn_icon.setAttribute("class","fa-solid fa-volume-xmark");
}else{
    muteBtn_icon.setAttribute("class","fa-solid fa-volume-high");
}
}




// events 
video.addEventListener("click",togglePlay);
toggle.addEventListener("click",togglePlay);
skipButtons.forEach(function(but){
    but.addEventListener("click",skip);
});
ranges.forEach(function(e){e.addEventListener("change",handleRange)});
ranges.forEach(function(e){e.addEventListener("mousemove",handleRange)});
video.addEventListener("timeupdate",handleProgress);
progress.addEventListener("click",scrub)
let mouseVar=false;
progress.addEventListener("mouseup",() => mouseVar = false);
progress.addEventListener("mousedown",() => mouseVar = true);
progress.addEventListener("mousemove",(e) => mouseVar && scrub(e));
muteBtn.addEventListener("click",muting);
fullScreen.addEventListener("click",()=>video.requestFullscreen())

