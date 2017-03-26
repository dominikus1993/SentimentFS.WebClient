import * as React from "react";
import { Component } from 'react';

interface IAppProps {
    message: string;
}
interface IAppState {} 

class App extends Component<IAppProps, IAppState> {
    render() {
        return (
            <h1>{this.props.message}</h1>
        );
    }
}

export default App;