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
        const { name, value } = event.target;
        // if (eventName === "fName") {
        //     setContact((prevValue) => {
        //         return {
        //             fName: eventValue,
        //             lName: prevValue.lName,
        //             email: prevValue.email
        //         }
        //     });
        // } else if (eventName === "lName") {
        //     setContact((prevValue) => {
        //         return {
        //             fName: prevValue.fName,
        //             lName: eventValue,
        //             email: prevValue.email
        //         }
        //     });

        // } else if (eventName === "email") {
        //     setContact((prevValue) => {
        //         return {
        //             fName: prevValue.fName,
        //             lName: prevValue.lName,
        //             email: eventValue
        //         }
        //     });

        // } // insted of this we can write


        setContact(prevValue => {
            return {
                ...prevValue,
                [name]: value // in the box if we take the name then it will replace the value and without boxes it will simply take the key name and replace it with the valueName

            };
        });
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