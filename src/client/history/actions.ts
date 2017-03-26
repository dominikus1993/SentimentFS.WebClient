import { Actions } from "../glabal/actions";
import { IKeyWord, IResult } from "../glabal/models";
import { History } from "../glabal/urls";

export function fetchHistoryPending(): Actions {
    return { type: "HISTORY_PENDING" };
}

export function fetchHistoryFulfilled(result: IResult<IKeyWord[]>): Actions {
    return { type: "HISTORY_FULFILLED", payload: result };
}

export function fetchHistoryRejected(error?: any): Actions {
    return { type: "HISTORY_REJECTED", payload: error };
}

export function fetchHistory(quantity: number) {
    return async (dispatch) => {
        dispatch(fetchHistoryPending());
        try {
            const response = await fetch(History(quantity));
            const result: IResult<IKeyWord[]> = await response.json();
            dispatch(fetchHistoryFulfilled(result));
        } catch (error) {
            dispatch(fetchHistoryRejected(error));
        }
    };
}
