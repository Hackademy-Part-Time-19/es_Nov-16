//esercizio n.1

/*let array = ["Franco", "Gennaro", "Valerio", "Giulia", "Eugenio"];

for (let i = 0; i < array.length; i++){
     
    console.log(array[i])
}*/

//esercizio n.2

/*let array = ["Franco", "Gennaro", "Valerio", "Giulia", "Eugenio"];

for (let i = 0; i < array.length; i++){
     
        for (let j = 0; j< array[i].length; j++) {

            console.log(array[i][j])
        }
}*/

//esercizio n.3

/*let contoCorrente = 3000;
let operazione;

while (operazione != 4) {
  operazione = parseInt(prompt("Benvenuto, selezioni l'opzione desiderata.\n\n Premi 1 per fare un bonifico\n\nPremi 2 per fare un prelievo\n\nPremi 3 per visualizzare il saldo\n\nPremi 0 per ritirare la carta"));

  switch (operazione) {
    case 1:
      importoSelezionato = parseInt(prompt("Inserisci l'importo dell'operazione"));

      if (contoCorrente - importoSelezionato > 0) {
        let destinatario = parseInt(prompt("Inserisci l'Iban del destinatario:"));
        contoCorrente = contoCorrente - importoSelezionato;

        alert("Il Bonifico destinato a " + destinatario + "è andato a buon fine");
        alert("Il saldo agggiornato è di " + contoCorrente + euro);
      }

      break;

    case 2:
      importoSelezionato = parseInt(prompt("Inserisci l'importo dell'operazione"));

      if (contoCorrente - importoSelezionato > 0) {
        contoCorrente = contoCorrente - importoSelezionato;

        alert("Il Prelievo di " + importoSelezionato + " è andata a buon fine");
        alert("Il saldo agggiornato è di " + contoCorrente + euro);
      } else {
        alert("Siamo spiacenti, il Saldo non è sufficiente");
      }
      break;

    case 3:
      alert("Il suo saldo agggiornato è di " + contoCorrente + " euro");

      break;

    case 0:
      alert("Grazie e torni a trovarci.");

      break;

    default:
      alert("Errore. Opzione non supportata.");
  }
}*/

//esercizio n.3

/*let somma = 0;
for ( let i = 0; i <= 200; i++){
    
    somma = somma + i;

    
}
console.log(somma)*/

//esercizio n.4

/*let numero = 0;

while (numero<400){

    if(numero %20==0){
        console.log(numero)
    }

    numero++;
}*/