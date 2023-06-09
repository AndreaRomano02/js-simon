console.log("JS OK");

//# Recupero gli elemtni dal DOM
const countdownElement = document.getElementById("countdown");
const gridElement = document.getElementById("number-grid");
const firstPage = document.getElementById("first-page");
const form = document.getElementById("form");
const userNumberElement = form.querySelectorAll("input");
const submit = document.getElementById("submit");
const scoreElement = document.getElementById("score");
const overflow = document.getElementById("overflow");

//# Variabili
const number = [];
const min = 1;
const max = 100;
let randomNumber;
let userNumber = [];
let score = 0;
let correctNumber = "Nessuno";

//* Imposto il valore da cui deve partire il countDown (30s)
let countDown = 30;
countdownElement.innerText = countDown;

//# Funzioni

//? Funzione per il random
const random = (min, max) => (result = Math.floor(Math.random() * (max + 1 - min)) + min);

//! Coriandoli effetto

function frame() {
  const end = Date.now() + 15 * 10;

  // go Buckeyes!
  const colors = ["#bb0000", "#ffffff"];
  confetti({
    particleCount: 2,
    angle: 60,
    spread: 55,
    origin: { x: 0 },
    colors: colors,
  });

  confetti({
    particleCount: 2,
    angle: 120,
    spread: 55,
    origin: { x: 1 },
    colors: colors,
  });

  if (Date.now() < end) {
    requestAnimationFrame(frame);
  }
}

//# -----------------------------------------------
//# LOGICA
//# -----------------------------------------------

//# Creo l'Array dei 5 numeri casuali
while (number.length < 5) {
  do {
    randomNumber = random(min, max);
  } while (number.includes(randomNumber));
  number.push(randomNumber);
}

//# Inserisco ogni elemento dell'Array in pagina
for (let i = 0; i < number.length; i++) {
  gridElement.innerHTML += `<span class="number">${number[i]}</span>`;
}

//# Creo un intervallo di 1 secondo
const timer = setInterval(() => {
  //* Decremento il countdown e lo stampo ogni secondo in pagina
  countdownElement.innerText = --countDown;

  //* Quando il countDown ariva a 0...
  //? Ho inserito -1 poichè voglio vedere anche lo 0 in pagina
  if (countDown === -1) {
    //* Interrompo l'intervallo
    clearInterval(timer);

    //* Svuoto la pagina e mostro il Form
    firstPage.classList.add("d-none");
    form.classList.remove("d-none");

    //# Attendo il click del form
    form.addEventListener("submit", (event) => {
      //? Tolgo la funzione di default al FORM
      event.preventDefault();

      //# Recupero i valori degli Input dati dall'utente
      for (let i = 0; i < userNumberElement.length; i++) {
        userNumber.push(parseInt(userNumberElement[i].value));
      }

      //# Scorro l'Array dei numeri dati dall'utente
      //# E controllo se sono uguali a quelli scelti casualmente prima
      for (let i = 0; i < userNumber.length; i++) {
        if (number.includes(userNumber[i])) {
          correctNumber = number[i];
          score++;
        }
      }

      //# Se hai fatto almeno un punto fai partire i coriandoli
      if (score !== 0) frame();

      //# Stampo quanti punti ha ottenuto l'utente
      scoreElement.classList.remove("d-none");
      overflow.classList.remove("d-none");
      scoreElement.innerHTML = `
      <div>I numeri che hai indovinato sono: 
      <div>${correctNumber}</div>
      </div>
      <span>Il tuo punteggio è di ${score}</span>
      <button type="button" class="btn btn-danger">Riprova</button>
      `;

      //# Attendo il click del bottone 'Riprova' e ricarico la pagina
      const buttonRetry = document.querySelector("#score button");
      buttonRetry.addEventListener("click", () => {
        window.location.reload();
      });
    });
  }
}, 1000);
