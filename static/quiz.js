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

function submit(cur_score){
    let data_to_save = {
        "score": 0, // don't need this
        "id":data["id"],
        "correct":false, // don't need this as well 
        "answer":arr
    }
    //data_to_save["answer"] = arr
    if (arraysEqual(arr, data["answer"])){
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
    if(data["id"] != "1"){
        // $("#quiz_tut").addClass("hidden")
        let questionTitle = "Question "+data["id"]+": Please replicate the tempo"
        $("#questionTitle").html(questionTitle)
        let image_div = $("<input type='image' src='/static/audio-button.png' class='audio-button' OnClick='playQuestion()'/>")
        $("#subtitle_content").append(image_div)
    }
    
    // console.log(questionTitle)
    
    
    
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


   


})