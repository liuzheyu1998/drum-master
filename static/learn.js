function play() {
    let id = event.srcElement.id
    console.log("played " + drum_kit[id]["name"] + " (id=" + id + ")")
    let audio_path = new Audio(drum_kit[id]["audio_path"]);
    audio_path.play();

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
    let btn_div = $("<strong>Note!</strong>  " + str + "<button type='button' class='btn-close' id='btn_alert" + id + "'></button>")
    div.append(btn_div)
    $("#alert_section").append(div)
}

function display_quiz() {
    let div = $("<div class='vertical_center'></div>")
    let btn_div = $("<button class='btn btn-info' type='button' ><a href='/quiz/1'>Quiz</button>")
    div.append(btn_div)
    $("#col_third").append(div)
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
    display_alert("Try them all before the quiz.", "1")

    btn_alert1()
})