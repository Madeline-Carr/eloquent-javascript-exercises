/*
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

//To Feed or Not to Feed
let largeDog = 100;
let mediumDog = 50;
let smallDog = 10;

function feedDog(weight, size) {
    if (weight > size) { console.log("Do not feed.") }
    else if (weight === size) { console.log("Feed if you wish!") }
    else if (weight <= size) { console.log("Please feed your pup!") }
    else console.log("The weight should be a number.");
}
feedDog(5, smallDog);
feedDog(75, mediumDog);
feedDog(100, largeDog);
feedDog("a", mediumDog);

function ohmsLaw(voltage, current, resistance) {
    if (voltage === 0) {
        voltage = current * resistance;
        console.log(voltage);
    }
    if (current === 0) {
        current = voltage / resistance;
    }
    if (resistance === 0) {
        resistance = voltage / current;
    }
}

ohmsLaw(0, 2, 12);

//For.. in Test
let theBood = {
    name: "maggins",
    age: 3,
    size: "large"
};

for (const key in theBood) {
    console.log(key); //Prints property names
    console.log(theBood[key]); //Prints the property value
    //Note the value can not be theBood.key because the key
    //needs to be evaluated first. This can be done wiht the brackets.
}

*/

//
function spelledBackwards(string) {
    let backString = "";
    for (i = string.length - 1; i >= 0; i--) {
        backString += string[i];
    }
    console.log(backString);
}
spelledBackwards("Maddie");
spelledBackwards("Dog");