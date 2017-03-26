import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import * as logger from "redux-logger";
import "tslib";
import App from "./containers/App";
import { InittialApplicationState } from "./glabal/constants";
import { IApplicationState } from "./glabal/models";
import { reducers } from "./glabal/reducers";

const combinedReducers  = combineReducers<IApplicationState>(reducers);
const middleware = applyMiddleware(logger());
const store = createStore<IApplicationState>(combinedReducers, InittialApplicationState, middleware);

store.dispatch({type: "HISTORY_FULFILLED", payload: {data: {isSuccess: true, value: ["dupa"]}} as any });

export const render = (element) => {
    ReactDOM.render(<App message="Hello World from App" ></App>, document.querySelector(element));
};
