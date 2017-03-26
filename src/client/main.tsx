import Axios from "axios";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import * as logger from "redux-logger";
import thunk from "redux-thunk";
import "tslib";
import App from "./app/App";
import { InittialApplicationState } from "./glabal/constants";
import { IApplicationState } from "./glabal/models";
import { reducers } from "./glabal/reducers";
import { History } from "./glabal/urls";

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const combinedReducers = combineReducers<IApplicationState>(reducers);
const middleware = applyMiddleware(logger(), thunk);
const store = createStore<IApplicationState>(combinedReducers, InittialApplicationState, composeEnhancers(middleware));

store.dispatch({ type: "HISTORY_FULFILLED", payload: { data: { isSuccess: true, value: ["dupa"] } } as any });

export async function historys(quantity: number) {
    try {
        const result = await Axios.get(History(quantity));
        if (result.data.isSuccess) {
            store.dispatch({ type: "HISTORY_FULFILLED", payload: result.data.value});
        }
    } catch (error) {
        console.log("ELo");
    }
}

historys(10).then(() => {});
historys(3).then(() => {});

export const render = (element) => {
    ReactDOM.render(<App message="Hello World from App" ></App>, document.querySelector(element));
};
