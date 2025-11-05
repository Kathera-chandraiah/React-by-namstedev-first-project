import React from "https://esm.sh/react@19.2.0";
import ReactDOM from "https://esm.sh/react-dom@19.2.0/client";
const heading = React.createElement("h1", {}, "This heading from react!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
