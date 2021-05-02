import React from "react";
import ReactDOM from "react-dom";
import Login from './form';

var isloggedIn = false;

// function renderingConditionally() {
//     if (isloggedIn) {
//         return ( < h1 > Hello < /h1>);
//         }
//         else {
//             return ( < Login / > );
//         }
//     };



function App() {
    return ( < div className = "container" > {
            // isloggedIn ? < h1 > Hello < /h1> : < Login/ >

            isloggedIn && < h1 > Hello < /h1 >
        } <
        /div>
    );
} // ternary operator is in the action.
// isloggedIn return false value so that it does not show anything on the screen.

export default App;