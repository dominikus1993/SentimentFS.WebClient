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

    public handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.props.onSearch(this.state.text);
        if (!this.props.isLoading) {
            this.setState({ text: "" });
        }
    }

    public handleChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
        this.setState({ text: e.currentTarget.value });
    }

    public handleBlur = () => {
        if (this.props.isLoading) {
            this.props.onSearch(this.state.text);
        }
    }

    public render() {
        return (<div className="searchBox row">
            <div className="col-lg-12 nopadding">
                <form onSubmit={this.handleSubmit}>
                    <div className="input-group input-group-lg">
                        <input type="text" name="searchTweet" id="tweet-search" className="input-lg form-control"
                            onBlur={this.handleBlur} onChange={this.handleChange}
                            autoFocus={this.state.text.length > 0} placeholder="Wpisz frazę" />
                        <span className="input-group-btn">
                            <input className="btn btn-default btn-lg" type="submit" value="Szukaj"
                                disabled={this.props.isLoading} />
                        </span>
                    </div>
                </form>
            </div>
        </div>);
    }
}
