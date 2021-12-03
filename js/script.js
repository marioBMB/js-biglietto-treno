
/*

Il programma dovrà chiedere all’utente
  il numero di chilometri che vuole percorrere
  l’età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km) .
va applicato uno sconto del 20% per i minorenni.
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

*/


const eurosPerKm = 0.21;
const kmToBeCovered = prompt("Inserire il numero di Km da percorrere:");
const userOld = parseInt(prompt("Inserire l'età:"));
let discountPercentage;
let discountMessage = "";

let originalAmount = kmToBeCovered * eurosPerKm;
let amount = originalAmount;

let message = document.getElementById("message");


if (userOld < 0){
    alert("Non puoi inserire un'età minore di zero.")
    sleep(5);
    window.location.reload();
}

if (userOld < 18){
    discountPercentage = 20;
    discountMessage = "Sei un minore. ";
}
else if (userOld >= 65) {
    discountPercentage = 40;
    discountMessage = "Sei un over 65. ";
}


if (discountPercentage > 0 ){
    discountMessage += "Hai diritto ad uno sconto del " + discountPercentage + "% !";
    amount = originalAmount - originalAmount * discountPercentage / 100;
}

amount = Number(Math.round(amount+'e2')+'e-2'); // arrotondamento a 2 cifre decimali.
console.log(Math.round(amount+'e2')+'e-2');


if (amount != originalAmount) {
    message.innerHTML = "<p>"+discountMessage+"</p>" + 
                        "Il prezzo totale del biglietto è: <del>" +originalAmount + "</del> " + amount +"€";
}
else {
    message.innerHTML = "Il prezzo totale del biglietto è: "+ amount +"€";
}


