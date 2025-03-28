function checkAnswer(exercise, answer) {
    let correctAnswers = {
      1: 'a', // El niño corre con la pelota
      2: 'a', // El sol brilla en el cielo
      3: 'b', // El gato juega con la lana
      4: 'a', // El árbol tiene muchas hojas
      5: 'a'  // La luna brilla en la noche
    };
  
    let feedback = document.getElementById(`feedback${exercise}`);
    let blanks = document.querySelectorAll(`#blank${2 * exercise - 1}, #blank${2 * exercise}`);
  
    // Reseteo de los espacios en blanco a "______"
    blanks[0].textContent = "______";
    blanks[1].textContent = "______";
  
    if (answer === correctAnswers[exercise]) {
      feedback.textContent = '¡Correcto!';
      feedback.className = 'correct';
  
      // Completar los espacios en blanco con las respuestas correctas
      blanks[0].textContent = (exercise === 1) ? 'niño' : (exercise === 2) ? 'sol' : (exercise === 3) ? 'gato' : (exercise === 4) ? 'árbol' : 'luna';
      blanks[1].textContent = (exercise === 1) ? 'pelota' : (exercise === 2) ? 'cielo' : (exercise === 3) ? 'lana' : (exercise === 4) ? 'hojas' : 'noche';
    } else {
      feedback.textContent = '¡Intentalo de nuevo!';
      feedback.className = 'incorrect';
    }
  }
  
  