let arr = []

function play1() {
    var audio = new Audio('/static/crash_cymbal.mp3');
    arr.push(0)
    
    audio.play();
    console.log(arr)
}
function play2() {
    var audio = new Audio('/static/crash_cymbal.mp3');
    arr.push(1)
    audio.play();
    console.log(arr)
}
function play3() {
    var audio = new Audio('/static/crash_cymbal.mp3');
    arr.push(2)
    audio.play();
    console.log(arr)
}
function play4() {
    var audio = new Audio('/static/crash_cymbal.mp3');
    arr.push(3)
    audio.play();
    console.log(arr)
}
function play5() {
    var audio = new Audio('/static/crash_cymbal.mp3');
    arr.push(4)
    audio.play();
    console.log(arr)
}
function play6() {
    var audio = new Audio('/static/crash_cymbal.mp3');
    arr.push(5)
    audio.play();
    console.log(arr)
}
function play7() {
    var audio = new Audio('/static/crash_cymbal.mp3');
    arr.push(6)
    audio.play();
    console.log(arr)
}
function play8() {
    var audio = new Audio('/static/crash_cymbal.mp3');
    arr.push(7)
    audio.play();
    console.log(arr)
}
function arraysEqual(a1,a2) {
    return JSON.stringify(a1)==JSON.stringify(a2);
}

function submit(cur_score){
    let data_to_save = {
        "score": cur_score,
    }
    if (arraysEqual(arr, data["answer"])){
        data_to_save["score"] += 1

    }
    id = parseInt(data["id"])
    new_url = "/quizresult/"+id.toString()

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

$(document).ready(function(){
    cur_score = score["score"]
    console.log(cur_score)
    let questionTitle = "Question "+data["id"]+": Please replicate the tempo"
    console.log(questionTitle)
    $("#questionTitle").html(questionTitle)
    
    
    $("#submit").click(function(){   
        console.log(cur_score)
                   
        submit(cur_score)

        
    })
    $("#clear").click(function(){   
        
        arr=[]
        console.log(arr)

        
    })


   


})