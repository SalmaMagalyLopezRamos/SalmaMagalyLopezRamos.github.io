function checkAnswers() {
    let result = document.getElementById('result');
    let correctAnswers = {
        "answer1": "blue",
        "answer2": "red",
        "answer3": "green",
        "answer4": "yellow",
        "answer5": "blue"
    };

    let score = 0;
    let total = 5;

    for (let key in correctAnswers) {
        let selected = document.getElementById(key).value;
        if (selected === correctAnswers[key]) {
            score++;
        }
    }

    result.textContent = `Has acertado ${score} de ${total} respuestas.`;
}
