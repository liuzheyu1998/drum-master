let arr = []
function play1() {
    var audio = new Audio('/static/crash_cymbal.mp3');
    arr.push(1)
    
    audio.play();
    console.log(arr)
}
function play2() {
    var audio = new Audio('/static/crash_cymbal.mp3');
    arr.push(2)
    audio.play();
    console.log(arr)
}
function play3() {
    var audio = new Audio('/static/crash_cymbal.mp3');
    arr.push(3)
    audio.play();
    console.log(arr)
}
function play4() {
    var audio = new Audio('/static/crash_cymbal.mp3');
    arr.push(4)
    audio.play();
    console.log(arr)
}
function play5() {
    var audio = new Audio('/static/crash_cymbal.mp3');
    arr.push(5)
    audio.play();
    console.log(arr)
}
function play6() {
    var audio = new Audio('/static/crash_cymbal.mp3');
    arr.push(6)
    audio.play();
    console.log(arr)
}
function play7() {
    var audio = new Audio('/static/crash_cymbal.mp3');
    arr.push(7)
    audio.play();
    console.log(arr)
}
function play8() {
    var audio = new Audio('/static/crash_cymbal.mp3');
    arr.push(8)
    audio.play();
    console.log(arr)
}
function submit(cur_score){
    let data_to_save = {
        "score": cur_score+1,
    }
    id = parseInt(data["id"])+1
    new_url = "/quiz/"+id.toString()

    console.log(id)
    $.ajax({
        type: "POST",
        url: "/submitAnswer",                
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        data : JSON.stringify(data_to_save),
        success: function(result){
            window.location.href=new_url
            

        },
        error: function(request, status, error){
            console.log("There is an Error");
            console.log(request)
            console.log(status)
            console.log(error)
        }
    });


        


}
function displayAnswer(){
    let answer = data["answer"]
    let ids = ["crush1", "crush2", "crush3", "drum1", "drum2", "drum3", "drum4", "drum5"]
    // console.log("here")
    // let i = 0;
    // let ans = answer[i]
    // let drum_ele = "#"+ids[ans]
    let arrow = "#"+ids[answer[0]]+"arrow"
    $(arrow).removeClass("hidden")
    for (let i = 0; i < answer.length; i++) { 
        let ans = answer[i]
        let drum_ele = "#"+ids[ans]
        let new_arrow = drum_ele+"arrow"
        
        $(drum_ele).click(function(){
            $(new_arrow).addClass("hidden")
            let next_ans = answer[i+1]
            let next_arrow = "#"+ids[next_ans]+"arrow"
            $(next_arrow).removeClass("hidden")

        })
        
    }
}
$(document).ready(function(){
    displayAnswer()
    $("#next").click(function(){ 
        let next_id = parseInt(data["id"])+1
        if(next_id <= 5){
            let next_url = "/quiz/"+next_id
            window.location.href=next_url

        }
        



        
    })
    


})