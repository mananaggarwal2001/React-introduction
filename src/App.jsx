import react from "react";
import Heading from "./Heading";
import List from "./List";

function App(name) {
  // react property like html we can also define the custom properties in the react app and we can also extract the details like javascript object.
  console.log(name);
  return (
    <div>
      <Heading />
      <List />
    </div>
  );
}

export default App;
