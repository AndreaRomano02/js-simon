# TRACCIA

Visualizzare in pagina 5 numeri casuali diversi. Da lì parte un timer di 30 secondi.

Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

---

## SEPS

- Recupero gli elementi dal DOM.
- Creo un array vuoto.
- Finche l'Array non ha 5 numeri all'interno
  - Finche il numero casuale uscito è gia presente nell'Array.
    - Genera un altro numero.
  - Inserisci il numero casuale.
- Scorro l'Array per far stampare tutti i numeri in pagina.
- Inizializzo un countdown che ad ogni secondo si aggiorna e decrementa il suo valore.
- **SE** Il valore del countdown arriva a 0:
  - Fermo il countdown.
  - Svuoto la pagina.
  - Chiedo all'utente di inserire i numeri che ricorda.
  - **SE** i numeri che ha inserito l'utente sono presenti nell'Array.
    - Incremento una variabile del punteggio.
  - Stampo la quanto punteggio ha totalizzato.
