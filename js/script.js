// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
var RPS= ["rock","paper","scissor"]
var cpu = Math.floor((Math.random()*RPS.length));
var user = "#userChoice"
var CPU= cpu
var paper ="paper"
var rock ="rock"
var scissor ="scissor" 
var paper1 = 0
var rock1 =1
var scissor1 =2 

$("#shoot").click(function(){
     $("#userChoice").text($("#input").val());
     $("#computerChoice").text(cpu).val()
 
 
//});
    


    if(user === rock && CPU === rock1 || user === paper && CPU === paper1  ||
     user  === scissor && CPU === rock1){ 
        $("#result").text("Draw")        
      } else if ( user === rock && CPU === paper1 ){
        $("#result").append("Loser")
    }
    
     else if ( user === paper && CPU === scissor1 ){
        $("#result").html("Loser")
    }
     else if ( user === scissor && CPU === rock1 ){
        $("#result").html("Loser")
    }
     else if ( user === rock  && CPU === scissor1 ){
         $("#result").html("winner")
    }
     else if ( user === paper  && CPU === rock1 ){
         $("#result").html("winner")
    }
     else if ( user === scissor && CPU === paper1 ){
        $("#result").html("winner")
    }
    });
    
     /*  else if(){
           
           
       
    }
    
    $("result").text($("winner").val());
    
 
});*/