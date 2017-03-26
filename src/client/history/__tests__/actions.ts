import { getHistory } from "../actions";
test("test action", () => {
    const testSubject = getHistory(10);
    expect(testSubject.type).toBe("HISTORY");
});
