import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render( < App / > , document.getElementById("root"));

const citrus = ["lime", "lemon", "orange"];
const fruits = ["apple", "banana", "orange", ...citrus]; // ... means the spread operator is used to call the array.

// we can also insert any particular object in another object using the spread operator.
// if we simply insert the object within the object it will create the nested object.
const fullName = {
    fName: "James",
    lName: "Bond"
}

const User = {
    ...fullName,
    userName: "jamesbond2007",
}
console.log(User);
console.log(fruits);