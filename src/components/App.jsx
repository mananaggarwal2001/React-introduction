import React from "react";
import ReactDOM from "react-dom";



function App() {
    const [counter, setCount] = React.useState(0);
    // State comes with the 2 parameters useDefined and the f .
    var count = 0;

    const [red, green, blue] = [9, 123, 300];

    function increase() {
        setCount(counter + 1); // used for setting the count value to the other value after the functiion is called.
    }

    function decrease() {
        setCount(counter - 1);
    }


    return ( <
        div className = "container" >
        <
        h1 > { counter } < /h1> <
        button onClick = { increase } > + < /button><
        button onClick = { decrease } > - < /button > < /
        div >
    );
}

// condition for using the hooks is you must use the hooks inside the function
export default App;