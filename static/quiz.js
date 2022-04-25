let arr = []
let next_id = 0
let is_correct = true
let seqs = [[],[],[],[],[],[],[],[],[]]
let cur = 1

function play(element) {
    let id = event.srcElement.id
    let audio_path = new Audio(drum_kit[id]["audio_path"]);
    arr.push(id)
    console.log(cur)
    console.log(parseInt(id))
    console.log(seqs[parseInt(id)])
    seqs[parseInt(id)].push(cur);
    cur += 1;
    let seqid = "#"+id+"ans";
    $(seqid).html(seqs[parseInt(id)].toString());
    audio_path.play();
}

function arraysEqual(a1,a2) {
    console.log("a1")
    console.log(a1)
    console.log("a2")
    console.log(a2)

    return JSON.stringify(a1)==JSON.stringify(a2);
}

function click_hide_btn() {
    $(".hide-btn").click(function(){   
        $("#video")[0].pause();
        $("#video_container").empty()
        $("#hide-btn").addClass("hidden");
    })
}


function playQuestion() {
    let path = data["audio_path"];
    
    if (path.slice(-3) == "mp4") {
        console.log(path.slice(-3))
        let video_div = $("<div><video id='video' width='600' controls autoplay ><source src='" + path + "' type='video/mp4'</video></div>")
        let close_btn = $("<button id='hide-btn' class='close hide-btn'>X</button>")
        
        $("#video_container").append(video_div)
        $("#video_container").append(close_btn)
        click_hide_btn()
        
    } else {
        var audio = new Audio(path);
        audio.play();
    }
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

function submit(cur_score){
    let data_to_save = {
        "score": 0, // don't need this
        "id":data["id"],
        "correct":false, // don't need this as well 
        "answer":arr
    }
    //data_to_save["answer"] = arr
    let ans = data["answer"]
    if(data["id"]=="5"){
        ans = data["ans"]
    }


    if (arraysEqual(arr, ans)){
        is_correct=true
    }
    else{
        is_correct=false
    }

    //id = parseInt(Object.keys(data))
    id = parseInt(data["id"])
    console.log(id)

    new_url = "/quizresult/"+id.toString()
    next_id = id+1
    console.log(next_id)
    console.log("debug1")
    $.ajax({
        type: "POST",
        url: "/submitAnswer",                
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        data : JSON.stringify(data_to_save),
        success: function(result){
            console.log("debug1")
            if(is_correct){
                $("#alert_feedback").html("Your answer is correct")
            }
            else{
                $("#alert_feedback").html("Your answer is incorrect")
            }
            $("#submit").addClass("hidden")
            $("#clear").addClass("hidden")
            
            
            
            $("#alert_section").removeClass("hidden")
            
            

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
    // cur_score = score["score"]
    // console.log(cur_score)
    if (data["id"]!="1"){
        $("#quiz_tut").addClass("hidden")
    }
    if(data["id"] != "5"){
        let questionTitle = "Question "+data["id"]+": Please replicate the tempo"
        $("#questionTitle").html(questionTitle)
        let image_div = $("<input type='image' src='/static/audio-button.png' class='audio-button' OnClick='playQuestion()'/>")
        $("#subtitle_content").append(image_div)
    }else{
        let questionTitle = "Question "+data["id"]+": Please choose the audio matching with the video"
        $("#questionTitle").html(questionTitle)

    }
    
    // console.log(questionTitle)

    if(data["id"] == "5"){
        console.log("empty")
        $("#mockDrumArea").empty()

    }
    else{
        $("#quizVideo").empty()
    }
    
    
    $("#quiz_tut_close").click(function(){   
        $("#quiz_tut").addClass("hidden")

        
    })

    $("#quiz_tut_ok").click(function(){   
        $("#quiz_tut").addClass("hidden")        
    })

    $("#submit").click(function(){   
        //console.log(cur_score)
        console.log("here")
        cur_score = 0
        submit(cur_score)
        console.log(arr)

        
    })
     $("#clear").click(function(){   

         console.log(arr)
         arr=[]
         console.log(arr)
         cur = 1
         seqs = [[],[],[],[],[],[],[],[],[]]
         $("#1ans").html("")
         $("#2ans").html("")
         $("#3ans").html("")
         $("#4ans").html("")
         $("#5ans").html("")
         $("#6ans").html("")
         $("#7ans").html("")
         $("#8ans").html("")



        
     })
     $("#alert_next").click(function(){   
        $("#alert_section").addClass("hidden")
        if(next_id <= 5){
                let next_url = "/quiz/"+next_id
                window.location.href=next_url
    
            }
            else{
                window.location.href="/quizfeedback"
            }

        

       
    })
    $("#alert_answer").click(function(){  
        window.location.href="/quizcorrectness/"+data["id"]
        

        

       
    })
    $("#Aoption").click(function(){  
        console.log('A')
        $("#Aoption").removeClass()
        $("#Boption").removeClass()
        $("#Coption").removeClass()
        $("#Doption").removeClass()
        $("#Aoption").addClass("btn btn-info selected")
        $("#Boption").addClass("btn btn-info unselected")
        $("#Coption").addClass("btn btn-info unselected")
        $("#Doption").addClass("btn btn-info unselected")
        arr = ["1"]
        console.log(arr)

    })
    $("#Boption").click(function(){  
        console.log('B')
        $("#Aoption").removeClass()
        $("#Boption").removeClass()
        $("#Coption").removeClass()
        $("#Doption").removeClass()
        $("#Aoption").addClass("btn btn-info unselected")
        $("#Boption").addClass("btn btn-info selected")
        $("#Coption").addClass("btn btn-info unselected")
        $("#Doption").addClass("btn btn-info unselected")
        arr = ["2"]
        console.log(arr)
    })
    $("#Coption").click(function(){  
        console.log('C')
        $("#Aoption").removeClass()
        $("#Boption").removeClass()
        $("#Coption").removeClass()
        $("#Doption").removeClass()
        $("#Aoption").addClass("btn btn-info unselected")
        $("#Boption").addClass("btn btn-info unselected")
        $("#Coption").addClass("btn btn-info selected")
        $("#Doption").addClass("btn btn-info unselected")
        arr = ["3"]
        console.log(arr)
    })
    $("#Doption").click(function(){  
        console.log('D')
        $("#Aoption").removeClass()
        $("#Boption").removeClass()
        $("#Coption").removeClass()
        $("#Doption").removeClass()
        $("#Aoption").addClass("btn btn-info unselected")
        $("#Boption").addClass("btn btn-info unselected")
        $("#Coption").addClass("btn btn-info unselected")
        $("#Doption").addClass("btn btn-info selected")
        arr = ["4"]
        console.log(arr)
    })


   


})