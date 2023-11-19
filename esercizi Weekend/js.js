//Scrivi un programma che dati 5 numeri restituisca in output la somma e la media

// function sommaMedia (x,y){

//     let somma = x + y;
//     let media = (x + y)/2;

//     console.log(somma,media);
// }

// sommaMedia (2,4)

//Scrivi un programma che dato:
// l'anno corrente e un anno di nascita
// determini l'età della persona, anni necessari a raggiungere ai 100

// function quantiAnni (annoCorrente, annoNascita){

//     let etaPersona = annoCorrente - annoNascita;
//     let arrivare100 =  100 - etaPersona;

//     console.log("La tua età è di " + etaPersona + " anni, e ti mancano " + arrivare100 + " anni per arrivare ai 100");
// }

// quantiAnni (2023, 1989)

//Scrivi un programma che dato:
// un numero totale di gatti e un numero di gatti presenti in fila
// restituisca il numero di file risultanti e nel caso l'ultima fila risulti incompleta indicare il numero di gatti mancanti per completarla

// function gatti(totaleGatti,gattiPerFila){

//     let totaleFile = totaleGatti / gattiPerFila;

//     if(totaleFile %2!=0){

//         totaleFile = Math.ceil(totaleFile);
//     }

//     let gattiMancanti = (totaleFile * gattiPerFila) - totaleGatti;

//     console.log("Il numero di file è di " + totaleFile + " , e i gatti mancanti sono " + gattiMancanti)
// }

// gatti (44,6)

//Scrivi una funzione che prenda 2 paramentie restituisca l'area del rettagolo

// function areaRettangolo (base, altezza){

//     let area = base * altezza;
//     console.log(area);
// }

// areaRettangolo(70,40)

//Scrivi un progranna che prenda due parametri di tipo stringa e ne restituisca la loro concatenazione.

//    function stringheConcatenate ( stringa1, stringa2){

//     let unicaStringa = (stringa1.concat('', stringa2));

//     console.log(unicaStringa)

//    }

//    stringheConcatenate("ciao sono Vincenzo e ", "questi sono esercizi sulle funzioni.")




// Scrivi un programma che prenda un parametro numero e restituisca true se il paramentro è pari, altrimenti false se dispari

// function pariDispari(numero){

// return numero%2 == 0;

// }

// console.log(pariDispari(189))




//Scrivi un programma che data una lista di nomi restituisca l'intera lista con i check.

// function checkLista (listaNomi) {

//     for (let i = 0; i < listaNomi.length; i++){

//         console.log(listaNomi[i] + "_Check");
//     }
// }

// checkLista(["Vincenzo", "Giulia","Mario", "Nicola", "Antonio"])

// Scrivi un programma che cerca un nome in una lista

// function cercaNome (listaNome, nomeDaCercare){

//     let personaPresente = false;

//     for (let i = 0; i < listaNome.length; i++) {

//         if(listaNome[i] == nomeDaCercare){

//             personaPresente = true;
//         }
//     }

//     return personaPresente;

// }




// let presente = cercaNome(["Mario","Luca","Caio","Lino","Maria"], "Vincenzo")

// if(presente){

//     console.log("La persona cercata è presente ? " + presente);

// }else{

//     console.log("La persona cercata non c'è");
// }

//Scrivi un programma che data una lista di nomi restituisca la somma degli elementi della lista

// function sommaNumeri(lista){

//     let totale = 0;

//     for (let i = 0; i < lista.length; i++) {

//         totale = totale + lista[i];

//     }

//     return totale;
// }

// sommaNumeri([1,2,3,4,5,6,7,8,9]);

// let somma = sommaNumeri([1,2,3,4,5,6,7,8,9]);

// console.log(somma);
