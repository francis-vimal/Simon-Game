// alert("Im working")
const buttonColors = ["red", "blue", "green", "yellow"];
var randomChosenColor, randomNumber;
var gamePattern = [];

function nextSequence() {
    randomNumber = Math.floor(Math.random()  * 4);
    randomChosenColor = buttonColors[randomNumber];
    console.log(randomNumber, randomChosenColor);
    gamePattern.push(randomChosenColor);
}

nextSequence();

var selectedElement = $("#" + randomChosenColor);
selectedElement.on("click", function () {
    console.log('this', this)
    selectedElement.toggleClass("pressed");
})

function buttonEvent() {

}
