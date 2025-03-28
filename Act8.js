function checkAnswer(questionIndex, answer) {
    const results = [
        false, true, false, true, true, false, false, false, false, false
    ];

    const resultText = answer === results[questionIndex] ? "¡Correcto!" : "Inténtalo de nuevo";
    document.getElementById(`result${questionIndex}`).textContent = resultText;
}
