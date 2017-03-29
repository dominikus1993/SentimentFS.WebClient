import { Actions } from "../glabal/actions";
import { InitialHistory } from "../glabal/constants";
import { History, IKeyWord } from "../glabal/models";
export function history(state: History = InitialHistory, action: Actions): History {
    switch (action.type) {
        case "HISTORY_FULFILLED":
            if (action.payload.isSuccess) {
                return { isLoading: false, keywords: action.payload.value };
            }
            return state;
        case "HISTORY_REQUEST":
            return Object.assign(state, { isLoading: true });
        case "HISTORY_REJECTED":
            return Object.assign(state, { isLoading: false });
        default:
            return state;

    }
}
