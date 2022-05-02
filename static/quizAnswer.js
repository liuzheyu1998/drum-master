let arr = []
// function playQuestion() {
//     var audio = new Audio('/static/crash_cymbal.mp3');
//     audio.play();
// }
function play(element) {
    let id = event.srcElement.id
    // $(element).addClass("drum_clicked")
    // setTimeout(() => { $(element).removeClass("drum_clicked") }, 180);

    //console.log("played " + drum_kit[id]["name"] + " (id=" + id + ")")
    let audio_path = new Audio(drum_kit[id]["audio_path"]);
    arr.push(id)
    audio_path.play();
}
function playQuestion() {
    var audio = new Audio(data["audio_path"]);
    audio.play();
}

function playAnswerA() {
    let path = data["audio_path_A"];
    var audio = new Audio(path);
    audio.play();
}
function playAnswerB() {
    let path = data["audio_path_B"];
    var audio = new Audio(path);
    audio.play();
}
function playAnswerC() {
    let path = data["audio_path_C"];
    var audio = new Audio(path);
    audio.play();
}
function playAnswerD() {
    let path = data["audio_path_D"];
    var audio = new Audio(path);
    audio.play();
}
var count = 0
function displayAnswer(id){
    count+=1
    let answer = data["answer"]
    console.log("hererrerererer")
    console.log(id)
    console.log(answer)
     let arrow = "#"+id+"arrow"
     console.log(arrow)
     $(arrow).addClass("hidden")

    let next_arrow = "#"+answer[count]+"arrow"
    $(next_arrow).removeClass("hidden")

}
$(document).ready(function(){
    $("#homeNav").removeClass("bold")
    $("#learnNav").removeClass("bold")
    $("#quizNav").addClass("bold")
    let answerTitle = "Question "+data["id"]+" answer: please follow the arrows to replicate the tempo"
    if (data["id"] != 2){
        let ans = data["answer"]
        let curseqid = 1
        for (const element of ans) {
            console.log(element);
            let divid = "#"+element+"ans"
            console.log(divid)
            let curval = $(divid).text()
            console.log(curval)
            if(curval.length != 0){
                curval = curval + ", " + curseqid.toString()
            }
            else{
                curval = curseqid.toString()
            }


            $(divid).html(curval)
            curseqid += 1
        }
    }
    else{
        let ans = data["answer"][0]
        let divid = "#"+ans+"ans"
        $(divid).html("&#10004")

    }
    $("#answerTitle").html(answerTitle)   
    if (data["id"] == 1){
        $("#playButton").addClass("hidden")
            let answerTitle = "Question "+data["id"]+" answer: Please play all toms from high to low pitch."
            $("#answerTitle").html(answerTitle)    

    }
    if(data["id"] != "5"){
        console.log("empty")
        $("#quizOptions").empty()
    }
    if(data["id"] == "5"){
        $("#playButton").addClass("hidden")
        let answerTitle = "Question "+data["id"]+" answer: Please choose the audio matching with the video."
        $("#answerTitle").html(answerTitle)   
        
  

    }

 


    //console.log(data)
    let answer = data["answer"]
    let arrow = "#"+answer[0]+"arrow"
    let counter = 0 //counte the number of clicks
    console.log("This is answer"+answer[0])
    $(arrow).removeClass("hidden")

    $("area").click(function(){
        // console.log("this.id",this.id)
        // console.log("answer",answer[counter])

        if (this.id == answer[counter]){
            console.log("counter")
            console.log(counter)
            
            displayAnswer(this.id)
            counter+=1
        }
        // if (counter == 0&&this.id==answer[0]){
        // displayAnswer(this.id)
        // counter+=1
        // }
        // else if (counter >=1 && this.id==answer[counter]){
        //     console.log("true")
        //     displayAnswer(this.id)

        // }

    })
    $("#back").click(function(){ 
        
        window.location.href="/quizfeedback"
        

        
    })
    


})