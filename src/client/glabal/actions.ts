import { IKeyWord, IResult } from "./models";

export type HistoryActions = { type: "HISTORY_REQUEST", payload: number }
    | { type: "HISTORY_REJECTED", payload?: any }
    | { type: "HISTORY_FULFILLED", payload: IResult<IKeyWord[]> };

export type Actions = HistoryActions;
