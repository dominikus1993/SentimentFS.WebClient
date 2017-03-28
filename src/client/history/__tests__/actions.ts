import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { fetchHistory, fetchHistoryFulfilled, fetchHistoryRejected, requestHistory } from "../actions";

jest.unmock("../actions");
jest.unmock("redux-mock-store");
jest.unmock("redux-thunk");

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockResponse = (status, statusText, response) => {
    return new Response(response, {
        status,
        statusText,
        headers: {
            "Content-type": "application/json",
        },
    });
};

test("requestHistory(10)", () => {
    const testSubject = requestHistory(10);
    expect(testSubject).toMatchObject({ type: "HISTORY_REQUEST", payload: 10 });
});

test("fetchHistoryFulfilled(10)", () => {
    const testSubject = fetchHistoryFulfilled({ isSuccess: true, value: [{ key: "Dominik", quantity: 10 }] });
    expect(testSubject).toMatchObject({ type: "HISTORY_FULFILLED", payload: { isSuccess: true, value: [{ key: "Dominik", quantity: 10 }] } });
});

test(`fetchHistoryRejected("Fetch failed")`, () => {
    const testSubject = fetchHistoryRejected("Fetch failed");
    expect(testSubject).toMatchObject({ type: "HISTORY_REJECTED", error: "Fetch failed" });
});

test(`fetchHistory(1) ok`, async () => {
    const store = mockStore();
    window.fetch = jest.fn().mockImplementation(() => (Promise.resolve(mockResponse(200, null, `{isSuccess: true, value: [{key: "Dominik", quantity: 10}]}`))));

    const result = await store.dispatch(fetchHistory(1));
    const expectedActions = store.getActions();
    expect(expectedActions.length).toBe(2);
    expect(expectedActions[0]).toMatchObject({ type: "HISTORY_REQUEST", payload: 1 });
    expect(expectedActions[1]).toMatchObject({ type: "HISTORY_FULFILLED", payload: {isSuccess: true, value: [{key: "Dominik", quantity: 10}]} });
});