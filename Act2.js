function playVocal(vocal) {
    const audio = new Audio(`vocales/${vocal}.opus`); // Los audios de las vocales deben estar en la carpeta "vocales"
    audio.play();
}
