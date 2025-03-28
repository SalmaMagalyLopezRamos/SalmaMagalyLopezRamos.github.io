const words = [
    { word: "Abeja", correct: "A" },
    { word: "Burro", correct: "B" },
    { word: "Casa", correct: "C" },
    { word: "Dado", correct: "D" },
    { word: "Elefante", correct: "E" },
    { word: "Foca", correct: "F" },
    { word: "Gato", correct: "G" },
    { word: "Huevo", correct: "H" },
    { word: "Isla", correct: "I" },
    { word: "Jirafa", correct: "J" }
];

let currentWordIndex = 0;
let correctLetter = "";

const wordDisplay = document.getElementById("word");
const feedback = document.getElementById("feedback");
const nextButton = document.getElementById("next-button");
const buttons = document.querySelectorAll(".letter-options button");

function loadWord() {
    const currentWord = words[currentWordIndex];
    wordDisplay.textContent = currentWord.word;
    correctLetter = currentWord.correct;

    let letters = ["A", "B", "C", "D"];
    if (!letters.includes(correctLetter)) {
        letters[Math.floor(Math.random() * 4)] = correctLetter;
    }

    buttons.forEach((button, index) => {
        button.textContent = letters[index];
        button.disabled = false;
    });

    feedback.textContent = "";
    nextButton.style.display = "none";
}

function checkAnswer(index) {
    const selectedLetter = buttons[index].textContent;

    if (selectedLetter === correctLetter) {
        feedback.textContent = `¡Correcto! La letra es ${correctLetter}.`;
        feedback.style.color = "green";
        buttons.forEach(button => button.disabled = true);
        nextButton.style.display = "block";
    } else {
        feedback.textContent = "¡Intenta de nuevo!";
        feedback.style.color = "red";
    }
}

function nextWord() {
    currentWordIndex++;

    if (currentWordIndex >= words.length) {
        feedback.textContent = "¡Has completado todas las palabras!";
        feedback.style.color = "blue";
        nextButton.style.display = "none";
        return;
    }

    loadWord();
}

document.addEventListener("DOMContentLoaded", loadWord);
