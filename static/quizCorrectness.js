let arr = []
// function playQuestion() {
//     var audio = new Audio('/static/crash_cymbal.mp3');
//     audio.play();
// }
function play(element) {
    let id = event.srcElement.id
    // $(element).addClass("drum_clicked")
    // // setTimeout(() => { $(element).removeClass("drum_clicked") }, 180);

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
    $("#next").click(function(){ 
        let new_url = "/quiz/"+next_id["next_id"]
        if(next_id["next_id"]=="6"){
            new_url = "/quizfeedback"
        }
        
        window.location.href=new_url
        

        
    })
    


})