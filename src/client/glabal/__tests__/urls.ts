import {History} from "../urls";
import {BaseUrl} from "../constants";

test(`History(1)`, () => {
    const subject = History(1);
    expect(subject).toBe(BaseUrl + "/api/Search/history/1");
});