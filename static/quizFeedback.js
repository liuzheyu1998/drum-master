$(document).ready(function(){
    $("#homeNav").removeClass("bold")
    $("#learnNav").removeClass("bold")
    $("#quizNav").addClass("bold")
    score = score
    feedback = "Congratulations, you got " + score +"/5!"
    $("#feedback").html(feedback)
    if (isCorrect["1"] == "1"){
        $("#q1-cor").html("&#10004")
    }
    else{
        $("#q1-cor").html("&#10060")
        $("#q1-cor").addClass("bold")
    }
    $("#feedback").html(feedback)
    if (isCorrect["2"] == "1"){
        $("#q2-cor").html("&#10004")
    }
    else{
        $("#q2-cor").html("&#10060")
        $("#q2-cor").addClass("bold")
    }
    $("#feedback").html(feedback)
    if (isCorrect["3"] == "1"){
        $("#q3-cor").html("&#10004")
    }
    else{
        $("#q3-cor").html("&#10060")
        $("#q3-cor").addClass("bold")
    }
    $("#feedback").html(feedback)
    if (isCorrect["4"] == "1"){
        $("#q4-cor").html("&#10004")
    }
    else{
        $("#q4-cor").html("&#10060")
        $("#q4-cor").addClass("bold")
    }
    $("#feedback").html(feedback)
    if (isCorrect["5"] == "1"){
        $("#q5-cor").html("&#10004")
    }
    else{
        $("#q5-cor").html("&#10060")
        $("#q5-cor").addClass("bold")
    }
    $("#relearn").click(function(){ 
        
        window.location.href="/learn"
    
        

        
    })
    $("#retry").click(function(){ 
        
        window.location.href="/quiz/1"
    
        

        
    })
    
    
})