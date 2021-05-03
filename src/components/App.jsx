import React, { useState } from "react";

/********************************REACT FORMS*******************************************/
function App() {
    const [name, setheadingName] = useState();
    const [isMouseHover, setColor] = useState(false);
    const [headingText, SetName] = useState("");
    let value = "";

    function handleChange(event) {
        setheadingName(event.target.value);
    }

    function mouseHover() {
        setColor(true);
    }

    function MouseOut() {
        setColor(false);
    }

    function handleClick() {
        SetName(name);
    }

    // function handleChange(event) { // event is the parameter which is used to observe the changes
    //     console.log(event.target.value);
    //     console.log(event.target.placeholder); // used for observing the changes in the value.
    //     console.log(event.target.type);

    //     setheadingName(event.target.value);
    // we can also set the onSubmit property of the form to tell how to hasndle the Submit event of the button.
    // event.preventDefault() prevent the default behaviour of the particular element such as form.
    // }
    return ( <
        div className = "container" >
        <
        h1 > { headingText } < /h1> <
        input onChange = { handleChange }
        type = "text"
        placeholder = "What's your name?" / >


        <
        button onClick = { handleClick }
        style = {
            {
                backgroundColor: isMouseHover ? "Black" : "White"

            }
        }
        onMouseOver = { mouseHover }
        onMouseOut = { MouseOut } >
        Submit < /button> < /
        div >

    )
}

// The HTML elements are responsible for handling their own state in the html.
// these elements are called controlled components like the value property in the input tag.


export default App;