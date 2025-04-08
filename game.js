// alert("Im working")
const buttonColors = ["red", "blue", "green", "yellow"];
var randomChosenColor, randomNumber;
var gamePattern = [];
var userClicked;
var userClickedPattern = [];
var selectedElement;
var level = 0;

$(".btn").on("click", function () {
    userClicked = $(this);
    userClickedPattern.push(userClicked.attr('id'));
    animatePress(userClicked.attr('id'));
    playSound(userClicked.attr('id'));
    console.log("userClickedPattern", userClickedPattern);
    if(userClickedPattern.every((value, index) => value === gamePattern[index])) {
        if(userClickedPattern.length === gamePattern.length) {
            nextSequence();
        }
    }
    else {
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 500);
        $("#level-title").text("Game Over - Press any key to restart");
        level = 0;
        userClickedPattern = [];
        gamePattern = [];
    }
});

$("body").keypress(nextSequence);

function nextSequence() {
    $("#level-title").text("Level " + (++level));
    userClickedPattern = [];
    randomNumber = Math.floor(Math.random()  * 4);
    randomChosenColor = buttonColors[randomNumber];
    selectedElement = $("#" + randomChosenColor);
    setTimeout(() => {
        buttonEvent();
    }, 500);
    gamePattern.push(randomChosenColor);
    console.log("gamePattern", gamePattern);
}

function buttonEvent() {
    selectedElement.fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}

function playSound(color) {
    const sound = new Audio(`./sounds/${color}.mp3`);
    sound.play();
}

function animatePress(currentColour) {
    userClicked.addClass('pressed');
    setTimeout(() => {
        userClicked.removeClass('pressed')
    }, 100);
}