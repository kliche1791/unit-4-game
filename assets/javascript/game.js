//variables

//function start game 
var game = {
    compareNumber : 0,
    crystalOne : 0,
    crystalTwo : 0, 
    crystalThree : 0, 
    crystalFour : 0,
    score : 0, 
    win : 0, 
    losses : 0,
    compareMax : 120,
    compareMin : 19,
    crystalsMax : 1,
    crystalsMin : 12,
    gameStart: function() {
     this.compareNumber = Math.floor((Math.random() * (this.compareMax - this.compareMin) + this.compareMin));
     this.crystalOne = Math.floor((Math.random() * (this.crystalsMax - this.crystalsMin) + this.crystalsMin));
     this.crystalTwo = Math.floor((Math.random() * (this.crystalsMax - this.crystalsMin) + this.crystalsMin));
     this.crystalThree = Math.floor((Math.random() * (this.crystalsMax - this.crystalsMin) + this.crystalsMin));
     this.crystalFour = Math.floor((Math.random() * (this.crystalsMax - this.crystalsMin) + this.crystalsMin));
     $('#compNumber').html(this.compareNumber);
     $('.crystalOneN').attr("value",this.crystalOne);
     $('.crystalTwoN').attr("value",this.crystalTwo);
     $('.crystalThreeN').attr("value",this.crystalThree);
     $('.crystalFourN').attr("value",this.crystalFour);
     console.log(this.compareNumber);
     console.log(this.crystalOne);
     console.log(this.crystalTwo);
     console.log(this.crystalThree);
     console.log(this.crystalFour);
    }, 

    addCrystals: function(){
        $("img").on("click", function() {
                var scorePlus = parseInt($(this).attr("Value"));  
                console.log(scorePlus);
                console.log(game.score);
                game.score = scorePlus + game.score;  
                console.log("TOTAL" + game.score);
                $('#scoreC').html(game.score);


                if(game.score === game.compareNumber){
                 alert("You Win");
                 game.win++;
                 $('#winner').html("Wins :" + game.win);
                 game.reset();
             }else if(game.score > game.compareNumber){
                alert("You Lost");
                game.losses++;
                $('#loser').html("Losses :" + game.losses); 
                game.reset();         
            console.log("keep Trying");
        }

              });
    }, 

    reset: function(){
        this.gameStart();
        $('#scoreC').html("0");
        game.score = 0
    }
};

$(document).ready(function() {
    game.gameStart();
    game.addCrystals();
  })
// function crystals 
// function check 
//