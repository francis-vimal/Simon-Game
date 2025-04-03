// alert("Im working")
const buttonColors = ["red", "blue", "green", "yellow"];
var randomChosenColor, randomNumber;
var gamePattern = [];
var userClicked;
var userClickedPattern = [];
function nextSequence() {
    randomNumber = Math.floor(Math.random()  * 4);
    randomChosenColor = buttonColors[randomNumber];
    console.log(randomNumber, randomChosenColor);
    gamePattern.push(randomChosenColor);
}

nextSequence();

var selectedElement = $("#" + randomChosenColor);
selectedElement.on("click", buttonEvent);

function buttonEvent() {
    // console.log('this', this);
    selectedElement.fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}

$(".btn").on("click", function () {
    userClicked = $(this).attr('id');
    userClickedPattern.push(userClicked);
    playSound(userClicked);
    console.log(userClickedPattern);
});

function playSound(color) {
    const sound = new Audio(`./sounds/${color}.mp3`);
    sound.play();
}