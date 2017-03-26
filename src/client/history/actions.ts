import Axios from "axios";
import { Actions } from "../glabal/actions";
import { History } from "../glabal/urls";

export function getHistory(quantity: number): Actions {
    return { type: "HISTORY", payload: Axios.get(History(quantity)) };
}