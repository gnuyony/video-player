const $video  = document.querySelector('#video');
const $play   = document.querySelector('#play');
const $pause  = document.querySelector('#pause');
const $backward  = document.querySelector('#backward');
const $forward  = document.querySelector('#forward');

$play.addEventListener('click',realizaplay);
$pause.addEventListener('click',realizapause);
$backward.addEventListener('click',realizaBackward);
$forward.addEventListener('click',realizaForward);

function realizaplay() {
  $video.play();
  $play.hidden  = true;
  $pause.hidden = false;
}

function realizapause() {
  $video.pause();
  $pause.hidden = true;
  $play.hidden  = false;
}

function realizaBackward() {
    $video.currentTime = $video.currentTime - 10;
}

function realizaForward() {
    $video.currentTime = $video.currentTime + 10;
}

const $progress = document.querySelector('#progress');
$video.addEventListener('loadedmetadata',handleLoaded)
$video.addEventListener('timeupdate',handleTimeUpdate)

function handleLoaded() {
    $progress.max = $video.duration
    console.log('ha cargado',$video.duration)
}
function handleTimeUpdate() {
    $progress.value = $video.currentTime
}

$progress.addEventListener('input',handleInput)

function handleInput(){
    $video.currentTime = $progress.value;
    console.log($progress.value);
}

