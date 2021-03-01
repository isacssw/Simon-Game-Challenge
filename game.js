// Var declaration

var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;


$(".btn").click(function (event) {

  var userChosenColour = $(this).attr("id");

  userClickedPattern.push(userChosenColour);

  animatePress(userChosenColour);

  playSound(userChosenColour);

});

function nextSequence() {

  var randomNumber = Math.floor(Math.random() * 4)

  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);

  level++;

  $("#level-title").text("Level " + level);

}

function playSound(name) {
  var audio = new Audio('sounds/' + name + '.mp3');
  audio.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}


$(document).on('keypress', function () {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});