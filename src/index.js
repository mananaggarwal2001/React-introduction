// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import Animals, { useAnimals } from "./data";
/*******************DESTRUCTURING THE ARRAY************************ */
console.log(Animals);
const [cat, dog] = Animals; // destructure the array into the components in the array.
// const { name, sound } = cat; // pulling out the property of the particular element in the array.
// // these name within the curly braces have to match the property which was defined in the array.
// console.log(name);
// console.log(sound);

// const {
//     name: dogName,
//     sound: dogSound
// } = dog;
// alternate use of the name and the sound property for the another objects in the array.
// // way of providing the alternative name that comes from an objects.
// console.log(dogName);
// console.log(dogSound);

// const { name = "fluffy", sound = "Burr" } = cat;
// if we dont have the property defined in the cat object then it will take the name from which is mentioned above.
/*******************DESTRUCTING THE NESTED OBJECT IN THE ARRAY*************************/
const { name, sound, feedingReqirements: { food, water } } = cat;
console.log(food);
console.log(water);
const [animal, makeSound] = useAnimals(cat);
console.log(animal);
makeSound();