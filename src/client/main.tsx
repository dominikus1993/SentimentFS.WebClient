import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import * as logger from "redux-logger";
import "tslib";
import App from "./containers/App";
import { InittialApplicationState } from "./glabal/constants";
import { IApplicationState } from "./glabal/models";
import { reducers } from "./glabal/reducers";

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const combinedReducers  = combineReducers<IApplicationState>(reducers);
const middleware = applyMiddleware(logger());
const store = createStore<IApplicationState>(combinedReducers, InittialApplicationState, composeEnhancers(middleware));

store.dispatch({type: "HISTORY_FULFILLED", payload: {data: {isSuccess: true, value: ["dupa"]}} as any });

export const render = (element) => {
    ReactDOM.render(<App message="Hello World from App" ></App>, document.querySelector(element));
};
