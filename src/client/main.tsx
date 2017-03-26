import "babel-polyfill";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import * as logger from "redux-logger";
import thunk from "redux-thunk";
import "tslib";
import "whatwg-fetch";
import App from "./app/App";
import { InittialApplicationState } from "./glabal/constants";
import { IApplicationState } from "./glabal/models";
import { reducers } from "./glabal/reducers";
import { History } from "./glabal/urls";

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const combinedReducers = combineReducers<IApplicationState>(reducers);
const middleware = applyMiddleware(logger(), thunk);
const store = createStore<IApplicationState>(combinedReducers, InittialApplicationState, composeEnhancers(middleware));

export const render = (element) => {
    ReactDOM.render(<App message="Hello World from App" ></App>, document.querySelector(element));
};
