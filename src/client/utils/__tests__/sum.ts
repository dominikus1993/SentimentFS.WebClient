import {sum} from "../sum";

test("sum when arr is empty", () => {
    expect(sum()).toBe(0);
});

test("sum when arr is not empty", () => {
    expect(sum(1,2)).toBe(3);
});
