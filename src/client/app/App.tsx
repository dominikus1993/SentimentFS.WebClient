import { Reducers } from "../glabal/reducers";
import { Dispatch } from "redux";
import { history } from "../history/reducers";
import * as React from "react";
import { Component } from "react";
import { Actions } from "../glabal/actions";
import { IApplicationState } from "../glabal/models";
import { fetchHistory } from "../history/actions";
import { History } from "../history/HistoryComponent";

export interface IAppProps { };
export interface IAppState { };

export interface IAppDispatchProps {
    fetchHistory: (quantity: number) => Actions;
}

const mapStateToProps = (state: IApplicationState, appProps: IAppProps) => ({
    analysisScore: state.analysisScore,
    history: state.history,
});

const mapDispatchToProps = (dispatch: Dispatch<Reducers>) => ({
    fetchHistory: (quantity: number) => dispatch(fetchHistory(quantity)),
})

class App extends Component<IApplicationState & IAppProps & IAppDispatchProps, IAppState> {
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

export default App;