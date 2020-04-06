

const Pet = ({ name, animal, breed }) => {

    return React.createElement("div", {}, [
        React.createElement("h1", {}, name),
        React.createElement("h2", {}, animal),
        React.createElement("h2", {}, breed)
    ])
}


const App = () => {
    return React.createElement("div", { id: "something-important" }, [
        React.createElement("h1", {}, "Adopt ME"),
        React.createElement(Pet, { name: "Luna", animal: "Dog", breed: "german" }),
        React.createElement(Pet, { name: "Gatsby", animal: "Parrot", breed: "cocktail" }),
        React.createElement(Pet, { name: "Tripy", animal: "cat", breed: "krean" })
    ])
}
ReactDOM.render(React.createElement(App), document.getElementById("root"))