import { Actions } from "../../glabal/actions";
import { InitialHistory, InittialApplicationState } from "../../glabal/constants";
import { history } from "../reducers";

test("when HISTORY_FULFILLED", () => {
    const testAction = { type: "HISTORY_FULFILLED", payload: { isSuccess: true, value: [{ key: "Dominik", quantity: 10 }] } } as Actions;
    const testState = InitialHistory;
    const testSubject = history(testState, testAction);
    expect(testSubject).toMatchObject({ keywords: [{ key: "Dominik", quantity: 10 }], isLoading: false });
});

test("when HISTORY_REJECTED", () => {
    const testAction = { type: "HISTORY_REJECTED", payload: { isSuccess: true, value: [{ key: "Dominik", quantity: 10 }] } } as Actions;
    const testState = InitialHistory;
    const testSubject = history(InitialHistory, testAction);
    expect(testSubject).toMatchObject({ keywords: [], isLoading: false });
});

test("when HISTORY_REJECTED", () => {
    const testAction = { type: "HISTORY_REQUEST", payload: 10 } as Actions;
    const testState = InitialHistory;
    const testSubject = history(InitialHistory, testAction);
    expect(testSubject).toMatchObject({ keywords: [], isLoading: true });
});