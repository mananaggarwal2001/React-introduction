import React, { useState } from "react";

function App() {

    const [FullName, SetFullName] = useState({
        fName: "",
        SName: ""
    }); // we can also store the Object in the in the useState hooks.


    // const [firstName, setName] = useState();
    // const [SecondName, setSecondName] = useState();



    // function setFirstName(event) {
    //     setName(event.target.value);
    // }

    // function SName(event) {
    //     setSecondName(event.target.value);
    // }

    function handleChange(event) {
        const nameValue = event.target.value;
        const inputName = event.target.name;
        SetFullName((prevValue) => {
                if (inputName === "fName") {
                    return {
                        fName: nameValue,
                        SName: prevValue.SName
                    }
                } else if (inputName === "lName") {
                    return {
                        fName: prevValue.fName,
                        SName: nameValue
                    }
                }


            }) // our function have the state and the react remembers the state in the form of the javascript object
            // thats why we have use the remembered previous  Value to retain the object.

    }

    return ( <
        div className = "container" >
        <
        h1 > Hello { FullName.fName } { FullName.SName } < /h1> <
        form >
        <
        input onChange = { handleChange }
        name = "fName"
        placeholder = "First Name"
        autoComplete = "false" / > <
        input name = "lName"
        onChange = { handleChange }
        placeholder = "Last Name"
        autoComplete = "false" / >
        <
        button > Submit < /button> < /
        form > <
        /div>
    );
}

export default App;