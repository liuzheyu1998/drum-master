function play() {
    // play drum
    let id = event.srcElement.id
    console.log("played " + drum_kit[id]["name"] + " (id=" + id + ")")
    let audio_path = new Audio(drum_kit[id]["audio_path"]);
    audio_path.play();

    // clear description view
    $("#description").html("")
    // show drum description
    let name_div = $("<div class='bold x-large'>" + drum_kit[id]["name"] + "</div>")
    let category_div = $("<div> (" + drum_kit[id]["category"] + ")</div>")
    let pitch_div = $("<div>- Pitch: " + drum_kit[id]["pitch"] + "</div>")
    let des_div = $("<div>- Sound: " + drum_kit[id]["description"] + "</div>")
    $("#description").append(name_div)
    $("#description").append(category_div)
    $("#description").append(pitch_div)
    $("#description").append(des_div)

    // save user input data
    let data = {"id": id, "time": Date.now()}
    save_learn_input(data)
}

var alert_shown = false
function save_learn_input(data) {
    $.ajax({
        type: "POST",                
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        // pass new_data to backend
        data : JSON.stringify(data),
        
        // receive new data from backend
        // format: {id: [time1, time2, ...]}
        success: function(response){
             console.log(response)
                
            if (Object.keys(response).length == 8) {
                if (alert_shown == false) {
                    display_alert("You may enter the quiz!", "2")
                    btn_alert2()
                    alert_shown = true
                }
                
            }
        },

        error: function(request, status, error){
            console.log("Error");
            console.log(request)
            console.log(status)
            console.log(error)
        }
    });
}

function display_alert(str, id) {
    let div = $("<div id='alert" + id + "' class='alert alert-info alert-dismissible fade show alert-fixed'></div>")
    let btn_div = $("<div class = 'col-12'> <strong>Hi, </strong> <br>" + str + "</div>")
    let new_div = $("<div class = 'row'><div class='col-10'></div><div class = 'col-2'><button type='button' class='btn btn-info' id='btn_alert" + id + "'>OK</button></div></div>")
    btn_div.append(new_div)
    div.append(btn_div)
    $("#alert_section").append(div)
}

function display_quiz() {
    // let div = $("<div class='vertical_center'></div>")
    // let btn_div = $("<button class='btn btn-info' type='button' ><a href='/quiz/1'>Quiz</button>")
    // div.append(btn_div)
    // $("#col_third").append(div)
    $("#quizbutton").removeClass("hidden")
}

function btn_alert1() {
    $("#btn_alert1").click(function() {
        $("#alert1").alert("close");
    }) 
}

function btn_alert2() {
    $("#btn_alert2").click(function() {
        $("#alert2").alert("close");
        display_quiz()
    })
}


$(document).ready(function(){
    console.log("learn.js ready...")
    // $('img').mapster('highlight') 
    display_alert("Welcome to the Drum Master! <br>Click each piece and see what will happen! <br> Once you try them <strong> all</strong>, you will enter the quiz.", "1")

    btn_alert1()
    $("#quizbutton").click(function(){ 
        window.location.href="/quiz/1"

    })
})