$(document).ready(function(){
    score = score["score"]
    feedback = "Congratulations, you got " + score +"/5!"
    $("#feedback").html(feedback)
    if (isCorrect["1"] == "1"){
        $("#q1-cor").html("Correct")
    }
    else{
        $("#q1-cor").html("Wrong")
    }
    $("#feedback").html(feedback)
    if (isCorrect["2"] == "1"){
        $("#q2-cor").html("Correct")
    }
    else{
        $("#q2-cor").html("Wrong")
    }
    $("#feedback").html(feedback)
    if (isCorrect["3"] == "1"){
        $("#q3-cor").html("Correct")
    }
    else{
        $("#q3-cor").html("Wrong")
    }
    $("#feedback").html(feedback)
    if (isCorrect["4"] == "1"){
        $("#q4-cor").html("Correct")
    }
    else{
        $("#q4-cor").html("Wrong")
    }
    $("#feedback").html(feedback)
    if (isCorrect["5"] == "1"){
        $("#q5-cor").html("Correct")
    }
    else{
        $("#q5-cor").html("Wrong")
    }
    $("#relearn").click(function(){ 
        
        window.location.href="/learn"
    
        

        
    })
    $("#retry").click(function(){ 
        
        window.location.href="/quiz/1"
    
        

        
    })
    
    
})