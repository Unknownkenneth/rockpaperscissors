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

$("#shoot").click(function(){
     $("#userChoice").text($("#input").val());
 
 
});
    


     if(user && CPU === rock || paper || scissor){ 
        console.log("Draw")        
      } else if ( user === rock && CPU === paper ){
        $("#result").text(console.log("Loser"))
    }
    
     else if ( user === paper ||scissor && CPU === scissor );{
        $("#result").text(console.log("Loser"))
    }
     else if ( user === scissor && CPU === rock );{
        $("#result").text(console.log("Loser"))
    }
     else if ( user === rock  && CPU === scissor );{
         $("#result").text(console.log("winner"))
    }
     else if ( user === paper  && CPU === rock );{
         $("#result").text(console.log("winner"))
    }
     else if ( user === scissor && CPU === paper );{
        $("#result").text(console.log("winner"))
    }
     /*  else if(){
           
           
       
    }
    
    $("result").text($("winner").val());
    
 
});*/