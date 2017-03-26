import { Actions } from "../glabal/actions";
export function history(state: string[] = [], action: Actions) {
    if (action.type === "HISTORY_FULFILLED") {
        if (action.payload.data.isSuccess) {
            return action.payload.data.value;
        }
        return state;
    }
    return state;
}
