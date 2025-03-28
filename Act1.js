const objetos = [
    { imagen: "objeto1.jpg", nombre: "manzana" },
    { imagen: "objeto2.jpg", nombre: "pelota" },
    { imagen: "objeto3.jpg", nombre: "guitarra" },
    { imagen: "objeto4.jpg", nombre: "casa" },
    { imagen: "objeto5.jpg", nombre: "avión" },
    { imagen: "objeto6.jpg", nombre: "silla" },
    { imagen: "objeto7.jpg", nombre: "perro" },
    { imagen: "objeto8.jpg", nombre: "gato" },
    { imagen: "objeto9.jpg", nombre: "libro" },
    { imagen: "objeto10.jpg", nombre: "lápiz" }
];

let indiceActual = 0;

function verificarRespuesta() {
    let respuestaUsuario = document.getElementById("respuesta").value.trim().toLowerCase();
    let respuestaCorrecta = objetos[indiceActual].nombre;

    if (respuestaUsuario === respuestaCorrecta) {
        document.getElementById("mensaje").textContent = "✅ ¡Correcto!";
        document.getElementById("mensaje").style.color = "green";
    } else {
        document.getElementById("mensaje").textContent = ` Casi!. La respuesta es: ${respuestaCorrecta}`;
        document.getElementById("mensaje").style.color = "red";
    }
}

function siguienteObjeto() {
    indiceActual = (indiceActual + 1) % objetos.length;
    document.getElementById("imagen-objeto").src = objetos[indiceActual].imagen;
    document.getElementById("respuesta").value = "";
    document.getElementById("mensaje").textContent = "";
}

