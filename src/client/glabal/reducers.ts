import {history} from "../history/reducers";
import { Actions } from "./actions";
import { InitialAnalysisScore } from "./constants";
import { AnalysisScore, History, IAnalysisScore, IKeyWord } from "./models";

export type Reducer<TState> = (state: TState, action: Actions) => TState;

export type Reducers = {
    readonly analysisScore: Reducer<AnalysisScore>;
    readonly history: Reducer<History>;
};

export function analysisScore(state: AnalysisScore = InitialAnalysisScore, action: Actions){
    return state;
}

export const reducers: Reducers = {
    analysisScore,
    history,
};
