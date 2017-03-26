import { InitialAnalysisScore } from "./constants";
import { IAnalysisScore } from "./models";

import { Actions } from "./actions";

export type Reducer<TState> = (state: TState, action: Actions) => TState;

export type Reducers = {
    readonly analysisScore: Reducer<IAnalysisScore>;
    readonly history: Reducer<string[]>;
};

export function history(state: string[] = [], action: Actions) {
    if (action.type === "HISTORY_FULFILLED") {
        if (action.payload.data.isSuccess) {
            return action.payload.data.value;
        }
        return state;
    }
    return state;
}

export function analysisScore(state: IAnalysisScore = InitialAnalysisScore, action: Actions){
    return state;
}

export const reducers: Reducers = {
    analysisScore,
    history,
};
