import * as React from "react";
import { Actions } from "../glabal/actions";

export interface ISearchBoxProps {
    readonly onSearch: (value: string) => Actions;
    readonly isLoading: boolean;
}

export interface ISearchBoxState {
    text: string;
}

export default class SearchBoxComponent extends React.Component<ISearchBoxProps, ISearchBoxState> {
    constructor(props) {
        super(props);
        this.setState({ text: "" });
    }

    public render() {
        return (<div>Test</div>);
    }
}
