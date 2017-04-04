import "babel-polyfill";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { logger } from "redux-logger";
import thunk from "redux-thunk";
import "tslib";
import "whatwg-fetch";
import { InittialApplicationState } from "./glabal/constants";
import { IApplicationState } from "./glabal/models";
import { reducers } from "./glabal/reducers";
import { History } from "./glabal/urls";
import { fetchHistory } from "./history/actions";
import { MainPage } from "./mainPage/MainPage";

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const combinedReducers = combineReducers<IApplicationState>(reducers);
const middleware = applyMiddleware(logger, thunk);
const store = createStore<IApplicationState>(combinedReducers, InittialApplicationState, composeEnhancers(middleware));

store.subscribe(() => {
    console.log("changed", store.getState());
});

const App = () => (
  <MuiThemeProvider>
    <MainPage />
  </MuiThemeProvider>
);

export const render = (element) => {
    ReactDOM.render(
        <Provider store={store} >
            <App />
        </Provider>,
        document.querySelector(element));
};
