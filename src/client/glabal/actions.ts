import { IKeyWord, IResult } from "./models";

export type HistoryActions = { type: "HISTORY_PENDING" }
    | { type: "HISTORY_REJECTED", payload?: any }
    | { type: "HISTORY_FULFILLED", payload: IResult<IKeyWord[]> };

export type Actions = HistoryActions;
