// Existing functionality
const myButton = document.getElementById("clickMeBtn");
const displayParagraph = document.getElementById("displayText");
let newText = "I just learned to change myself!";

function updateText() {
    displayParagraph.textContent = newText;
}

myButton.addEventListener("click", updateText);

const decisionButton = document.getElementById("decisionBtn");
let likesJavaScript = true;

function makeChoice() {
    if (likesJavaScript) {
        displayParagraph.textContent = "I love JavaScript! 🌟";
    } else {
        displayParagraph.textContent = "I need to practice more. 😅";
    }
}

decisionButton.addEventListener("click", makeChoice);

const repeatButton = document.getElementById("repeatBtn");

function showNumbers() {
    let numbers = "";
    for (let i = 1; i <= 5; i++) {
        numbers += i + " ";
    }
    displayParagraph.textContent = numbers;
}

repeatButton.addEventListener("click", showNumbers);

// New Array functionality
const showArrayButton = document.getElementById("showArrayBtn");
let favoriteFoods = ["Pizza", "Sushi", "Ice Cream", "Burgers", "Pasta"];

function showArray() {
    displayParagraph.textContent = "My favorite foods: " + favoriteFoods.join(", ");
}

showArrayButton.addEventListener("click", showArray);
 
