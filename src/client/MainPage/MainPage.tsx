import * as React from "react";
import { Component } from "react";
import {connect} from "react-redux";
import { Dispatch } from "redux";
import { Actions } from "../glabal/actions";
import { IApplicationState } from "../glabal/models";
import { Reducers } from "../glabal/reducers";
import { fetchHistory } from "../history/actions";
import { HistoryList } from "../history/HistoryListComponent";
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

class MainPageComponent extends Component<IAppProps & IAppDispatchProps & IApplicationState, IAppState> {
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
                <HistoryList history={this.props.history} />
            </div>
        );
    }
}

export const MainPage: React.ComponentClass<IAppProps> = connect(mapStateToProps, mapDispatchToProps)(MainPageComponent);
