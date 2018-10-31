// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
var RPS= [rock,paper,scissor]
var cpu = RPS.random
var rl
var pl
var sl
var user = input
var CPU= "#computerChoice"


$("#userChoice").click(function(){});
    
    
$("shoot").click(function(){

     if(user && CPU === rock || paper || scissor){ 
        console.log("Draw")        
      } else if ( user === rock && CPU === paper ){
        console.log(Loser)
    }
    
     else if ( user === paper ||scissor && CPU === scissor ){
        console.log(Loser)
    }
     else if ( user === scissor && CPU === rock ){
        console.log(Loser)
    }
     else if ( user === rock  && CPU === scissor ){
        console.log(winner)
    }
     else if ( user === paper  && CPU === rock ){
        console.log(winner)
    }
     else if ( user === scissor && CPU === paper ){
        console.log(winner)
    }
       else if(){
           
           
       
    }
    
    $("result").text($("winner").val());
    
 
});