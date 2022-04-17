let arr = []
// function playQuestion() {
//     var audio = new Audio('/static/crash_cymbal.mp3');
//     audio.play();
// }
function play() {
    let id = event.srcElement.id
    //console.log("played " + drum_kit[id]["name"] + " (id=" + id + ")")
    let audio_path = new Audio(drum_kit[id]["audio_path"]);
    arr.push(id)
    audio_path.play();
}
function playQuestion() {
    var audio = new Audio(data["audio_path"]);
    audio.play();
}


var count = 0
function displayAnswer(id){
    count+=1
    let answer = data["answer"]
    console.log(id)
    console.log(answer)
     let arrow = "#"+id+"arrow"
     console.log(arrow)
     $(arrow).addClass("hidden")

    let next_arrow = "#"+answer[count]+"arrow"
    $(next_arrow).removeClass("hidden")

}
$(document).ready(function(){
    
    let answerTitle = "Question "+data["id"]+" answer: please follow the arrows to replicate the tempo"
    $("#answerTitle").html(answerTitle)
    console.log(data)
    let answer = data["answer"]
    let arrow = "#"+answer[0]+"arrow"
    // console.log(answer)
    $(arrow).removeClass("hidden")

    $("area").click(function(){
        displayAnswer(this.id)

    })
    $("#back").click(function(){ 
        
        window.location.href="/quizfeedback"
        

        
    })
    


})