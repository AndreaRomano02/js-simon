console.log("JS OK");

//# Recupero gli elemtni dal DOM
const countdownElement = document.getElementById("countdown");
const gridElement = document.getElementById("number-grid");
const mainPage = document.querySelector("main");

//# Variabili
const number = [];
const min = 1;
const max = 100;
let randomNumber;
let userNumber = [];
let score = 0;

//* Imposto il valore da cui deve partire il countDown (30s)
let countDown = 3;
countdownElement.innerText = countDown;

//# Funzioni

//? Funzione per il random
const random = (min, max) => (result = Math.floor(Math.random() * (max + 1 - min)) + min);

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

    //* Svuoto la pagina
    mainPage.innerHTML = "";

    while (userNumber.length < number.length) {
      //* Chiedo all'utente i numeri che si ricorda
      userNumber.push(
        parseInt(
          prompt(`Quali erano i numeri che erano scritti nella pagina
        PS: Sono compresi tra ${min} e ${max}`)
        )
      );
    }

    //# Scorro l'Array dei numeri dati dall'utente
    //# E controllo se sono uguali a quelli scelti casualmente prima
    for (let i = 0; i < userNumber.length; i++) if (number.includes(userNumber[i])) score++;

    //# Stampo quanti punti ha ottenuto l'utente
    alert(`Il tuo punteggio è di ${score}`);
  }
}, 1000);
