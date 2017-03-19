import * as React from "react";
import * as ReactDOM from "react-dom";

export const render = (element) => {
    ReactDOM.render(<div>Hello World</div>, document.querySelector(element))
}