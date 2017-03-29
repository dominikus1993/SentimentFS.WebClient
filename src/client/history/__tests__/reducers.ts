import { Actions } from '../../glabal/actions';
import { InittialApplicationState } from "../../glabal/constants";
import { history } from "../reducers";

test("when HISTORY_FULFILLED", () => {
    const testAction = { type: "HISTORY_FULFILLED", payload: { isSuccess: true, value: [{ key: "Dominik", quantity: 10 }] } } as Actions;
    const testState = [];
    const testSubject = history(testState, testAction);
    expect(testSubject.length).toBeGreaterThan(0);
    expect(testSubject).toMatchObject([{ key: "Dominik", quantity: 10 }])
});

test("when HISTORY_REJECTED", () => {
    const testAction = { type: "HISTORY_REJECTED", payload: { isSuccess: true, value: [{ key: "Dominik", quantity: 10 }] } } as Actions;
    const testState = [];
    const testSubject = history(testState, testAction);
    expect(testSubject.length).toBe(0);
    expect(testSubject).toMatchObject([]);
});

test("when HISTORY_REJECTED", () => {
    const testAction = { type: "HISTORY_REQUEST", payload: 10 } as Actions;
    const testState = [];
    const testSubject = history(testState, testAction);
    expect(testSubject.length).toBe(0);
    expect(testSubject).toMatchObject([]);
});