import "babel-polyfill";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import * as logger from "redux-logger";
import thunk from "redux-thunk";
import "tslib";
import "whatwg-fetch";
import { MainPage } from "./mainPage/MainPage";
import { InittialApplicationState } from "./glabal/constants";
import { IApplicationState } from "./glabal/models";
import { reducers } from "./glabal/reducers";
import { History } from "./glabal/urls";
import { fetchHistory } from "./history/actions";

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const combinedReducers = combineReducers<IApplicationState>(reducers);
const middleware = applyMiddleware(logger(), thunk);
const store = createStore<IApplicationState>(combinedReducers, InittialApplicationState, composeEnhancers(middleware));

store.subscribe(() => {
    console.log("changed", store.getState());
});

export const render = (element) => {
    ReactDOM.render(
        <Provider store={store} >
            <MainPage />
        </Provider>,
        document.querySelector(element));
};
