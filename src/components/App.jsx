import React, { useState } from "react";

function App() {
    const [name, setheadingName] = useState();
    const [isMouseHover, setColor] = useState(false);

    function handleClicking() {
        setheadingName('GOODBYE');
    }

    function mouseHover() {
        setColor(true);
    }

    function MouseOut() {
        setColor(false);
    }
    return ( <
        div className = "container" >
        <
        h1 > { name } < /h1> <
        input type = "text"
        placeholder = "What's your name?" / >


        <
        button onClick = { handleClicking }
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

export default App;