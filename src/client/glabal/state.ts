import { IAnalysisScore } from "./models";
export interface IApplicationState {
    analysisScore: IAnalysisScore;
}

export const init: IApplicationState = {}