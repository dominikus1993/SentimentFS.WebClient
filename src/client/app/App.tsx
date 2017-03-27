import * as React from "react";
import { Component } from "react";
import {connect} from "react-redux";
import { Dispatch } from "redux";
import { Actions } from "../glabal/actions";
import { IApplicationState } from "../glabal/models";
import { Reducers } from "../glabal/reducers";
import { fetchHistory } from "../history/actions";
import { History } from "../history/HistoryComponent";
import { history } from "../history/reducers";

export interface IAppProps { };
export interface IAppState { };

export interface IAppDispatchProps {
    fetchHistory: (quantity: number) => any;
}

const mapStateToProps = (state: IApplicationState, appProps: IAppProps) => ({
    analysisScore: state.analysisScore,
    history: state.history,
});

const mapDispatchToProps = (dispatch: Dispatch<Reducers>) => ({
    fetchHistory: (quantity: number) => dispatch(fetchHistory(quantity)),
});

class AppComponent extends Component<IAppProps & IAppDispatchProps & IApplicationState, IAppState> {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchHistory(10);
    }

    render() {
        return (
            <div>
                No siema
                <History keyWords={this.props.history} />
            </div>
        );
    }
}

export const App: React.ComponentClass<IAppProps> = connect(mapStateToProps, mapDispatchToProps)(AppComponent);