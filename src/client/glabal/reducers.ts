import {history} from "../history/reducers";
import { Actions } from "./actions";
import { InitialAnalysisScore } from "./constants";
import { IAnalysisScore, IKeyWord } from "./models";

export type Reducer<TState> = (state: TState, action: Actions) => TState;

export type Reducers = {
    readonly analysisScore: Reducer<IAnalysisScore>;
    readonly history: Reducer<IKeyWord[]>;
};

export function analysisScore(state: IAnalysisScore = InitialAnalysisScore, action: Actions){
    return state;
}

export const reducers: Reducers = {
    analysisScore,
    history,
};
