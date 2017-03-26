import { Actions } from "../glabal/actions";
export function history(state: string[] = [], action: Actions) {
    if (action.type === "HISTORY_FULFILLED") {
        if (action.payload.isSuccess) {
            return action.payload.value;
        }
        return state;
    }
    return state;
}
