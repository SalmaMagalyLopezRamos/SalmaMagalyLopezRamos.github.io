document.addEventListener("DOMContentLoaded", function() {
    const pdfList = document.getElementById("pdf-list");
    const pdfFiles = [
        "Coloca las vocales faltantes.pdf",
        "Colorea el dibujo que empieza con la vocal que se indica.pdf",
        "Colorea, recorta y juega.pdf",
        "Completa los espacios de tu tarjeta de identificación.pdf",
        "Encierra las vocales.pdf",
        "Escribe la letra con la que inicia cada imagen.pdf",
        "Escribe tu nombre varias veces de cabeza a pies.pdf",
        "Rellena los espacios.pdf",
        "Tacha el cuadrado que contiene la vocal con que inicia cada imagen.pdf",
        "Une la vocal mayúscula con su similar minúscula.pdf"
    ];

    pdfFiles.forEach(file => {
        let listItem = document.createElement("li");
        let link = document.createElement("a");
        link.href = `material/${file}`;
        link.textContent = `Descargar ${file}`;
        link.setAttribute("download", file);

        listItem.appendChild(link);
        pdfList.appendChild(listItem);
    });
});
