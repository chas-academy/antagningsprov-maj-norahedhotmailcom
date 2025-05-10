

function uppg9 (){
    // skapa en funktion som heter sort och tar in en array av siffror som argument

const listOfNumbers =
[1, 3, 5, 6, 9, 10, 17, 22, 24, 33, 34, 40, 55, 59]

    // i funktionen du loopa igenom arrayen och kolla med en if-sats om  talet är jämt eller udda
    // i if-sattsen skriv ut i konsolen resultatet
    // resultatet ska loggas i formatet: talet och sen ordet "jämt" eller "udda"

function sort(listOfNumbers){        
        
for(let n of listOfNumbers){
        
    if(n % 2 === 0){
    console.log(n, " jämt")
    }
    else{console.log(n, " udda")
    }
}}

 // anropa funktionen och skicka med en array som argument
        sort(listOfNumbers);
    }

uppg9()

module.exports = { uppg9 };