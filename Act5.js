const draggables = document.querySelectorAll(".draggable");
const dropzones = document.querySelectorAll(".dropzone");

draggables.forEach(draggable => {
    draggable.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("text", event.target.id);
    });
});

dropzones.forEach(dropzone => {
    dropzone.addEventListener("dragover", (event) => {
        event.preventDefault();
    });

    dropzone.addEventListener("drop", (event) => {
        event.preventDefault();
        const draggedWord = event.dataTransfer.getData("text");
        const correctWord = dropzone.getAttribute("data-word");
        const feedback = dropzone.parentElement.querySelector(".feedback");

        if (draggedWord === correctWord) {
            dropzone.textContent = draggedWord;
            dropzone.classList.add("correct");
            feedback.textContent = "✔️ Correcto";
            feedback.style.color = "green";
        } else {
            feedback.textContent = "Intentalo de nuevo!";
            feedback.style.color = "red";
        }
    });
});
