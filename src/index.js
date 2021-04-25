import react from "react";
import reactDOM from "react-dom"; // latest es6 version of javascript
const Yourname = "Manan";

const date = new Date();

reactDOM.render(
  <div>
    <h1>Hello {Yourname}</h1>
    <p>Copyright {date.getFullYear()} Manan Aggarwal</p>
  </div>,
  document.getElementById("root")
);

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
//     <h1>List of the Stationary</h1>
//     <ul>
//       <li>Pencil</li>
//       <li>pen</li>
//       <li>Eraser</li>
//     </ul>
//   </div>,
//   document.getElementById("root")
// );

// reactDOM.render(
//   <div>
//     <h1>Hello World</h1>
//     <p>I am a boy from another world</p>
//   </div>,
//   document.getElementById("root")
// );
