let respuestasVerdaderoFalso = [true, false, true, true, false, true, false, false, true, true];
let respuestasCompletar = ["luna", "arbol", "perro", "canasta", "flor"];
let respuestasColores = ["azul", "verde"];

let respuestasUsuario = {
    verdaderoFalso: [],
    completar: [],
    colores: []
};

// Función para guardar respuestas en las preguntas de Verdadero o Falso
function saveAnswer(questionIndex, answer) {
    respuestasUsuario.verdaderoFalso[questionIndex] = answer;

    // Deshabilitar los botones de la pregunta seleccionada
    let questionButtons = document.querySelectorAll(`.question${questionIndex} button`);
    questionButtons.forEach(button => {
        button.disabled = true;  // Deshabilita todos los botones de esta pregunta
    });

    // Marcar la opción seleccionada
    let selectedButton = event.target;
    selectedButton.classList.add("selected");  // Marca la opción seleccionada
}

// Función para guardar las respuestas de colores
function saveColor(color, questionIndex) {
    // Evitar que se deseleccionen otras opciones
    if (!respuestasUsuario.colores[questionIndex]) {
        respuestasUsuario.colores[questionIndex] = color;
    }

    // Cambiar el color de fondo al seleccionar un color
    let questionButtons = document.querySelectorAll(`.colores .question${questionIndex} button`);
    questionButtons.forEach(button => {
        button.classList.remove("selected");
    });

    event.target.classList.add("selected"); // Selección de la opción
}

// Función para calificar las respuestas
function calificar() {
    let puntos = 0;

    // Calificar preguntas Verdadero/Falso
    respuestasUsuario.verdaderoFalso.forEach((respuesta, index) => {
        if (respuesta === respuestasVerdaderoFalso[index]) {
            puntos++;
        }
    });

    // Calificar oraciones completadas
    respuestasUsuario.completar = [
        document.getElementById('oracion1').value,
        document.getElementById('oracion2').value,
        document.getElementById('oracion3').value,
        document.getElementById('oracion4').value,
        document.getElementById('oracion5').value
    ];

    respuestasUsuario.completar.forEach((respuesta, index) => {
        if (respuesta === respuestasCompletar[index]) {
            puntos++;
        }
    });

    // Calificar colores
    respuestasUsuario.colores.forEach((respuesta, index) => {
        if (respuesta === respuestasColores[index]) {
            puntos++;
        }
    });

    // Mostrar calificación
    let calificacion = (puntos / 17) * 100; // Total de puntos posibles: 10 (Verdadero/Falso) + 5 (Completar) + 2 (Colores) = 17
    document.getElementById("calificacion").textContent = `Tu calificación es: ${calificacion.toFixed(2)}%`;
}

// Función para mezclar el orden de las opciones de Verdadero/Falso
function shuffleAnswers() {
    let buttons = document.querySelectorAll('.question button');
    let shuffledButtons = Array.from(buttons).sort(() => Math.random() - 0.5); // Mezcla aleatoriamente
    shuffledButtons.forEach(button => {
        button.parentElement.appendChild(button); // Reasignar los botones al DOM en el nuevo orden
    });
}

// Llamar a la función para mezclar las opciones de Verdadero/Falso
shuffleAnswers();
