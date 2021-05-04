import React, { useState } from "react";

function App() {
    const [contact, setContact] = useState({
        fName: "",
        lName: "",
        email: ""
    });

    function handleChange(event) {
        const eventValue = event.target.value;
        const eventName = event.target.name;
        if (eventName === "fName") {
            setContact((prevValue) => {
                return {
                    fName: eventValue,
                    lName: prevValue.lName,
                    email: prevValue.email
                }
            });
        } else if (eventName === "lName") {
            setContact((prevValue) => {
                return {
                    fName: prevValue.fName,
                    lName: eventValue,
                    email: prevValue.email
                }
            });

        } else if (eventName === "email") {
            setContact((prevValue) => {
                return {
                    fName: prevValue.fName,
                    lName: prevValue.lName,
                    email: eventValue
                }
            });

        }
    }

    return ( <
        div className = "container" >
        <
        h1 >
        Hello { contact.fName } { contact.lName } <
        /h1> <
        p > { contact.email } < /p> <
        form >
        <
        input onChange = { handleChange }
        name = "fName"
        placeholder = "First Name" / >
        <
        input onChange = { handleChange }
        name = "lName"
        placeholder = "Last Name" / >
        <
        input onChange = { handleChange }
        name = "email"
        placeholder = "Email" / >
        <
        button > Submit < /button> < /
        form > <
        /div>
    );
}

export default App;