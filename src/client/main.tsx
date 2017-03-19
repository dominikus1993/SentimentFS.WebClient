import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/App"


export const render = (element) => {
    ReactDOM.render(<App message="Hello World from App" ></App>, document.querySelector(element))
}