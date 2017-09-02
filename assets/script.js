$(document).ready(function(){
  var crystals = ["assets/images/crystal_one.jpg","assets/images/crystal_two.jpg", "assets/images/crystal_three.jpg", "assets/images/crystal_four.jpg"];

  var wins = 0;//wins
  var losses = 0;//losses

  var crystalSum = 0;//sets a sum for the crystals to add up to, so we can compare to random

  var random = Math.floor(Math.random()*(120-19+1)+19);//sets a number between 19-120
  console.log(random)

  var numberArray = [];

  for(var i = 0; i < 4; i++){
    numberArray[i] = Math.floor(Math.random()*(12-1+1)+1);
    console.log(numberArray);
  }

  $("#random-num").html("<h1>" + random + "</h1>");

  for(var i = 0; i < crystals.length; i++){
    var crystalImage = $("<img>");
    //console.log("first step");

    crystalImage.addClass("crystal-image");
    //console.log("second step");

    crystalImage.attr("src", crystals[i]);
    //console.log(crystals[i]);

    crystalImage.attr("data-crystalValue", numberArray[i]);
    //console.log(crystalImage);

    $("#crystal").append(crystalImage);
  }

  function initializeGame(){
    $("#crystal-sum, #numberArray").empty();
  }

  $(".crystal-image").on('click', function(){
      var crystalValue=($(this).attr("data-crystalValue"));
      crystalSum += parseInt(crystalValue);
      console.log(crystalSum);

      if(crystalSum === random){
        console.log("win");
        wins++;
        $("#wins").html("<h2> Wins: " + wins + "</h2>");
      }
      else if(crystalSum >= random){
        console.log("lose");
        losses++;
        $("#losses").html("<h2>Losses: " + losses + "</h2>");
      }
      $('#crystal-sum').html("<h2>" + crystalSum + "</h2>");
      //reset();
  });
});
