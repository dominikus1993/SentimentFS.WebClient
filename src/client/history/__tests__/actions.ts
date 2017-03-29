import * as fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { BaseUrl } from "../../glabal/constants";
import { fetchHistory, fetchHistoryFulfilled, fetchHistoryRejected, requestHistory } from "../actions";
import { history } from "../reducers";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

afterEach(() => {
    fetchMock.reset();
})

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

    fetchMock.get(`${BaseUrl}/api/Search/history/1`, { body: { isSuccess: true, value: [{ key: "Dominik", quantity: 10 }] } });
    const store = mockStore({ history: [] });

    const result = await store.dispatch(fetchHistory(1));
    const expectedActions = store.getActions();
    expect(expectedActions.length).toBe(2);
    expect(expectedActions[0]).toMatchObject({ type: "HISTORY_REQUEST", payload: 1 });
    expect(expectedActions[1]).toMatchObject({ type: "HISTORY_FULFILLED", payload: { isSuccess: true, value: [{ key: "Dominik", quantity: 10 }] } });
});

test(`fetchHistory(2) ok but not success`, async () => {

    fetchMock.get(`${BaseUrl}/api/Search/history/2`, { status: 200, body: { isSuccess: false, errors: ["test"] } });
    const store = mockStore({ history: [] });

    const result = await store.dispatch(fetchHistory(2));
    const expectedActions = store.getActions();
    expect(expectedActions.length).toBe(2);
    expect(expectedActions[0]).toMatchObject({ type: "HISTORY_REQUEST", payload: 2 });
    expect(expectedActions[1]).toMatchObject({ type: "HISTORY_FULFILLED", payload: { isSuccess: false, errors: ["test"] } });
});

test(`fetchHistory(3) error`, async () => {

    fetchMock.get(`${BaseUrl}/api/Search/history/3`, { status: 400, throws: "error" , body: {isSuccess: false, errors: ["test"]} })
    const store = mockStore({ history: [] });

    const result = await store.dispatch(fetchHistory(3));
    const expectedActions = store.getActions();
    expect(expectedActions.length).toBe(2);
    expect(expectedActions[0]).toMatchObject({ type: "HISTORY_REQUEST", payload: 3 });
    expect(expectedActions[1]).toMatchObject({error: "error", type: "HISTORY_REJECTED"});
});