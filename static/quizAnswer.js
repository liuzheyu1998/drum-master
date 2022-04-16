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


function displayAnswer(){
    let answer = data["answer"]
    console.log(answer.length)
    let ids = ["1", "2", "3", "4", "5", "6", "7", "8"]
    // console.log("here")
    // let i = 0;
    // let ans = answer[i]
    // let drum_ele = "#"+ids[ans]
    let arrow = "#"+answer[0]+"arrow"
    console.log(arrow)
    $(arrow).removeClass("hidden")
    for (let i = 0; i < answer.length; i++) { 
        // let ans = answer[i]
         let drum_ele = "#"+answer[i]
         let new_arrow = drum_ele+"arrow"
         console.log(new_arrow)

        // let new_arrow = drum_ele+"arrow"
        
        $(drum_ele).click(function(){
            $(new_arrow).addClass("hidden")
            let next_arrow = "#"+answer[i+1]+"arrow"
            // let next_ans = answer[i+1]
            // let next_arrow = "#"+ids[next_ans]+"arrow"
            $(next_arrow).removeClass("hidden")
            console.log("This is drum"+drum_ele)

        })
        
    }
}
$(document).ready(function(){
    
    let answerTitle = "Question "+data["id"]+" answer: please follow the arrows to replicate the tempo"
    $("#answerTitle").html(answerTitle)

    displayAnswer()
   
    $("#back").click(function(){ 
        
        window.location.href="/quizfeedback"
        

        
    })
    


})