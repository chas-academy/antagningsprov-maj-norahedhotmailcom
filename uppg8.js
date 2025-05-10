

function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

let listOfPeople = [
    {name: "Nora", age: 25},
    {name: "Svampbob", age: 20},
    {name: "Kungen", age: 79},
    {name: "Pewdiepie", age: 35},
    {name: "Dwayne The Rock", age: 53}
]

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen

function over30(listOfPeople){
    for(person of listOfPeople){
    if(person.age >= 30){
        console.log(person.name)
    }}
}

// anropa funktionen och skicka med arrayen som argument
over30(listOfPeople)
}

uppg8()

module.exports = { uppg8 };