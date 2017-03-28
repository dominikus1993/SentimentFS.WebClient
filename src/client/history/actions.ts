import "whatwg-fetch";
import { Dispatch } from "redux";
import { Actions } from "../glabal/actions";
import { IKeyWord, IResult } from "../glabal/models";
import { Reducers } from "../glabal/reducers";
import { History } from "../glabal/urls";

export function requestHistory(quantity: number): Actions {
    return { type: "HISTORY_REQUEST", payload: quantity };
}

export function fetchHistoryFulfilled(result: IResult<IKeyWord[]>): Actions {
    return { type: "HISTORY_FULFILLED", payload: result };
}

export function fetchHistoryRejected(error?: any): Actions {
    return { type: "HISTORY_REJECTED", error };
}

export function fetchHistory(quantity: number ) {
    return async (dispatch: Dispatch<Reducers>) => {
        try {
            dispatch(requestHistory(quantity));
            const response = await fetch(History(quantity));
            const result: IResult<IKeyWord[]> = await response.json();
            return dispatch(fetchHistoryFulfilled(result));
        } catch (error) {
            return dispatch(fetchHistoryRejected(error));
        }
    };
}
