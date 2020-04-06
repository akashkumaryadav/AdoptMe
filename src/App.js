import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
    return React.createElement("div", { id: "something-important" }, [
        React.createElement("h1", {}, "Adopt ME"),
        React.createElement(Pet, { name: "Luna", animal: "Dog", breed: "german" }),
        React.createElement(Pet, {
            name: "Gatsby",
            animal: "Parrot",
            breed: "cocktail",
        }),
        React.createElement(Pet, { name: "Tripy", animal: "cat", breed: "krean" }),
    ]);
};
render(React.createElement(App), document.getElementById("root"));
