import { fetchHistoryFulfilled, fetchHistoryRejected, requestHistory } from "../actions";

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