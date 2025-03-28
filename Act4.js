document.addEventListener("DOMContentLoaded", function () {
    const palabras = ["GATO", "LUNA", "SOL", "CASA", "FLOR", "PERRO", "NUBE", "RÍO", "ARBOL", "RATÓN"];
    let index = 0;
    let palabraCorrecta = palabras[index];

    const palabraContainer = document.getElementById("palabra-container");
    const siguienteBtn = document.getElementById("siguiente");
    const mensaje = document.getElementById("mensaje");

    function mostrarPalabra() {
        palabraContainer.innerHTML = "";
        mensaje.textContent = "";
        siguienteBtn.style.display = "none";

        palabraCorrecta = palabras[index];
        let letrasDesordenadas = palabraCorrecta.split("").sort(() => Math.random() - 0.5);

        letrasDesordenadas.forEach((letra) => {
            let span = document.createElement("span");
            span.textContent = letra;
            span.classList.add("letra");
            span.draggable = true;

            span.addEventListener("dragstart", (e) => {
                e.dataTransfer.setData("text", e.target.textContent);
                e.target.classList.add("dragging");
            });

            span.addEventListener("dragover", (e) => e.preventDefault());

            span.addEventListener("drop", (e) => {
                e.preventDefault();
                let dragging = document.querySelector(".dragging");
                if (dragging && dragging !== e.target) {
                    let temp = e.target.textContent;
                    e.target.textContent = dragging.textContent;
                    dragging.textContent = temp;
                    verificarPalabra();
                }
            });

            span.addEventListener("dragend", (e) => e.target.classList.remove("dragging"));

            palabraContainer.appendChild(span);
        });
    }

    function verificarPalabra() {
        let palabraUsuario = Array.from(palabraContainer.children).map((span) => span.textContent).join("");

        if (palabraUsuario === palabraCorrecta) {
            mensaje.textContent = "¡Correcto!";
            mensaje.style.color = "green";
            siguienteBtn.style.display = "block";
        }
    }

    siguienteBtn.addEventListener("click", function () {
        index = (index + 1) % palabras.length; // Pasa a la siguiente palabra
        mostrarPalabra();
    });

    mostrarPalabra(); // Inicia con la primera palabra
});



