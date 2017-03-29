import * as fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { BaseUrl } from "../../glabal/constants";
import { fetchHistory, fetchHistoryFulfilled, fetchHistoryRejected, requestHistory } from "../actions";
import { history } from "../reducers";

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

    fetchMock.get(BaseUrl + "/api/Search/history/1", { body: { isSuccess: true, value: [{ key: "Dominik", quantity: 10 }] } });
    const store = mockStore({ history: [] });

    const result = await store.dispatch(fetchHistory(1));
    const expectedActions = store.getActions();
    expect(expectedActions.length).toBe(2);
    expect(expectedActions[0]).toMatchObject({ type: "HISTORY_REQUEST", payload: 1 });
    expect(expectedActions[1]).toMatchObject({ type: "HISTORY_FULFILLED", payload: { isSuccess: true, value: [{ key: "Dominik", quantity: 10 }] } });
});