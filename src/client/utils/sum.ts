export const sum = (...arr: number[]) => {
    arr.reduce((acc, el) => acc + el, 0);
}