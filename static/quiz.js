function play() {
    let id = event.srcElement.id
    console.log("played " + drum_kit[id]["name"] + " (id=" + id + ")")
    let audio_path = new Audio(drum_kit[id]["audio_path"]);
    audio_path.play();
}

$(document).ready(function(){
    console.log("quiz.js ready...")
})