import "tslib";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import { init } from "./glabal/state";
import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/App";


export const render = (element) => {
    ReactDOM.render(<App message="Hello World from App" ></App>, document.querySelector(element));
};
