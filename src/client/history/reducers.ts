import { Actions } from "../glabal/actions";
import { IKeyWord } from "../glabal/models";
export function history(state: IKeyWord[] = [], action: Actions): IKeyWord[] {
    if (action.type === "HISTORY_FULFILLED") {
        if (action.payload.isSuccess) {
            return action.payload.value;
        }
        return state;
    }
    return state;
}
