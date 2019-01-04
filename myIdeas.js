//Animal Sounds
let dogs = ["Golden Retriever", "Pug", "Dalmation"];
let cats = ["Scottish Fold", "Siamese"];
let animals = ["Pug", "Rat", "Dalmation", "Scottish Fold", "Spider", "Dalmation"];
function animalSounds(listOfAnimals) {
    for (let animal of listOfAnimals) {
        if (dogs.includes(animal)) console.log("Ruff!!!");
        else if (cats.includes(animal)) console.log("Meow!");
        else console.log("...RAWRRR");
    }
}
animalSounds(animals);

//Ticket Time
let otterDaleSpeed = 45;
let briarwoodSpeed = 25;
let buckinghamSpeed = 35;

function ticket(speed, speedLimit) {
    if (speed > speedLimit) {
        console.log("You have a ticket for driving " + speed + " mph in a " + speedLimit + " mph zone!");
    }
    else console.log("We hope you are having a grand day!");
}
ticket(60, otterDaleSpeed);
ticket(20, briarwoodSpeed);