// alert("Im working")
const buttonColors = ["red", "blue", "green", "yellow"];
var randomChosenColor, randomNumber;
var gamePattern = [];
var userClicked;
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
    const sound = new Audio(`./sounds/${randomChosenColor}.mp3`);
    console.log("audio: ", sound)
    sound.play();
}

const buttonElement = $(".btn");
buttonElement.on("click", function () {
    userClicked = $(this).attr('id');
    console.log(userClicked);
});