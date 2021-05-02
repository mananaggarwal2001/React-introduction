import "./styles.css";
import react from "react";
import reactDOM from "react-dom"; // latest es6 version of javascript
import App from "./App";
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//map- map() function is used for looping around the components and
//extracting the things according to the function which was pass as an parameter.
function double(x) {
  return x * 2;
}

const newNumbers = number.map(double);
console.log(newNumbers);

//filter- create the new array by keeping the items that return the value true .

const filterNumber = number.filter((x) => {
  return x > 5;
});

console.log(filterNumber);

//reduce - Accumulate the value by doing something to the ezch item in an array.

var accumulatedNumber = number.reduce((accumulator, currentNumber) => {
  console.log("accumulated Number: " + accumulator);
  console.log("currentNumber: " + currentNumber);
  return accumulator + currentNumber;
}); //accumulator parameter is a simple variable jo continuous apni value badalta hain
// currentNumber which extracts the number from the parameter.
console.log(accumulatedNumber);

// find - find the first item that matches the condition in an array.

const findedNumber = number.find((x) => {
  return x > 5;
});

console.log(findedNumber);

// find-Index - returns the index of the first matched item in an array according to the condition .

const findedIndex = number.findIndex((x) => {
  return x > 5;
});

console.log("Index is " + findedIndex);

// ************************************ Javascript Functions end***************************************

// reactDOM.render(<App name="Manan" />, document.getElementById("root"));
// const Yourname = "Manan";
// const Yourname = "Manan";

// const customColor = {
//   color: "red"
// };
// const date = new Date();

// if (date.getHours() >= 6 && date.getHours() <= 12) {
//   reactDOM.render(
//     <h1 class="heading" style={customColor}>
//       Good Morning
//     </h1>,
//     document.getElementById("root")
//   );
// } else if (date.getHours() >= 12 && date.getHours() <= 18) {
//   customColor.color = "green";
//   reactDOM.render(
//     <h1 class="heading" style={customColor}>
//       Good Evening
//     </h1>,
//     document.getElementById("root")
//   );
// } else if (date.getHours() >= 18 && date.getHours() <= 24) {
//   customColor.color = "blue";
//   reactDOM.render(
//     <h1 class="heading" style={customColor}>
//       Good Night
//     </h1>,
//     document.getElementById("root")
//   );
// }
// if we want to insert the javascript inside the html then we have to simply write {variable name}
const Fname = "Manan";
const LName = "Aggarwal";
// we can add any javasscript expression inside the {}.
// we can use as many curly braces as we can

// reactDOM.render(
//   <div>

//     <h1>Hello {Fname + " " + LName}</h1>

//     <h1>Hello {Yourname}</h1>

//     <p>Copyright {date.getFullYear()} Manan Aggarwal</p>

//     <p>Copyright 2021 Manan Aggarwal</p>

//   </div>,
//   document.getElementById("root")
// );

// reactDOM.render(
//   <div>
//     <h1>Hello {`${Fname} ${LName}`}</h1>

// // const image = "https://picsum.photos/200";

// // const customStyle = {
// //   color: "red",
// //   fontSize: "50", // in jsx we use the camel casing instead of the kebab case.
// //   border: "2px solid black"
// // };
// // customStyle.color = "blue"; // we can change the style on go like in this
// // // how to style your react element
//   </div>,
//   document.getElementById("root")
// );

// if we want to insert the javascript inside the html then we have to simply write {variable name}
// const Fname = "Manan";
// const LName = "Aggarwal";
// we can add any javasscript expression inside the {}.
// we can use as many curly braces as we can
// // ineline style css
// reactDOM.render(
//   <div>
//     <h1 style={customStyle} contentEditable="true" spellCheck="false">
//       List of the Stationary
//     </h1>
//     <ul>
//       <li>Pencil</li>
//       <li>pen</li>
//       <li>Eraser</li>
//     </ul>
//     <img src={image} alt="random"></img>
//     <h1>Hello {Fname + " " + LName}</h1>
//   </div>,
//   document.getElementById("root")
// );

// By using String interpolation
// reactDOM.render(
//   <div>
//     <h1>Hello {`${Fname} ${LName}`}</h1>
//   </div>,
//   document.getElementById("root")
// );
// using the external style

// class = "(Name of the class)"

// if we want to insert the javascript inside the html then we have to simply write {variable name}
// const Fname = "Manan";
// const LName = "Aggarwal";
// we can add any javasscript expression inside the {}.
// we can use as many curly braces as we can

// reactDOM.render(
//   <div>

//     <h1>Hello {Fname + " " + LName}</h1>
// reactDOM.render(
//   <div>
//     <h1>List of the Stationary</h1>
//     <ul>
//       <li>Pencil</li>
//       <li>pen</li>
//       <li>Eraser</li>
//     </ul>
//   </div>,
//   document.getElementById("root")
// );

//     <h1>Hello {Yourname}</h1>

//     <p>Copyright {date.getFullYear()} Manan Aggarwal</p>

//     <p>Copyright 2021 Manan Aggarwal</p>

//   </div>,
//   document.getElementById("root")
// reactDOM.render(
//   <div>
//     <h1>Hello World</h1>
//     <p>I am a boy from another world</p>
//   </div>,
//   document.getElementById("root")
// );

// );

// By using String interpolation
// reactDOM.render(
//   <div>
//     <h1>Hello {`${Fname} ${LName}`}</h1>

//   </div>,
//   document.getElementById("root")
// );

// if we want to insert the javascript inside the html then we have to simply write {variable name}
// const Fname = "Manan";
// const LName = "Aggarwal";
// we can add any javasscript expression inside the {}.
// we can use as many curly braces as we can
// reactDOM.render(
//   <div>
//     <h1>Hello {Fname + " " + LName}</h1>
//   </div>,
//   document.getElementById("root")
// );

// By using String interpolation
// reactDOM.render(
//   <div>
//     <h1>Hello {`${Fname} ${LName}`}</h1>
//   </div>,
//   document.getElementById("root")
// );

// reactDOM.render(
//   <div>
//     <h1>Hello World</h1>
//     <p>I am a boy from another world</p>
//   </div>,
//   document.getElementById("root")
