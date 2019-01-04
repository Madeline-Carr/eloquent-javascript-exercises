//The sum of a range
function sumOfRange(start, end, step = 1) {
    let arrayOfNumbers = [];
    let counter = 0;
    for (let index = start; index <= end; index++) {
        counter += step;
        arrayOfNumbers.push(counter);
    }
    return arrayOfNumbers;
}
//Uses the default step
console.log(sumOfRange(1, 6));
//Has its own step
console.log(sumOfRange(1, 6, 2));

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

fucntion ticket(speed, speedLimit){
    if (speed > speedLimit) {
        console.log("You have a ticket for driving " + speed + "mph in a " + speedLimit + "mph zone!");
    }
    else console.log("We hope you are having a grand day!");
}
ticket(60, otterDaleSpeed);