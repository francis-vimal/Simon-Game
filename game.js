const buttonColors = ["red", "blue", "green", "yellow"];
var randomChosenColor, randomNumber;
var gamePattern = [];
var userClicked;
var userClickedPattern = [];
var selectedElement;
var level = 0;

function checkAnswer(index) {
    if(userClickedPattern[index] === gamePattern[index]) {
        if(userClickedPattern.length === gamePattern.length) {
            nextSequence();
        }
    }
    else {
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 1000);
        $("#level-title").text("Game Over - Press any key to restart");
        level = 0;
        userClickedPattern = [];
        gamePattern = [];
        $('.btn').off("click");
        setTimeout(() => {
            $("body").on("keypress", onStartPress);
            $("body").on("click", onStartPress);
        }, 1000);
    }
}

function onStartPress() {
    $(".btn").on("click", onButtonClick);
    $("body").off("keypress");
    $("body").off("click");
    setTimeout(() => {
        nextSequence();
    }, 500);
}

function onButtonClick() {
    userClicked = $(this);
    userClickedPattern.push(userClicked.attr('id'));
    animatePress(userClicked.attr('id'));
    playSound(userClicked.attr('id'));
    checkAnswer(userClickedPattern.length - 1);
}

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

$("body").keypress(onStartPress);
$("body").click(onStartPress);