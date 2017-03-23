
import { Action } from "./actions";

export type Reducer<TState> = (state: TState, action: Action) => TState;

export interface IReducers {}