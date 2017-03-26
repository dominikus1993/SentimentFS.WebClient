import { IResponse, IResult } from "./models";

export type HistoryActions = { type: "HISTORY", payload: any }
    | { type: "HISTORY_PENDING" }
    | { type: "HISTORY_REJECTED", payload?: any }
    | { type: "HISTORY_FULFILLED", payload: IResponse<IResult<string[]>> };

export type Actions = HistoryActions;
