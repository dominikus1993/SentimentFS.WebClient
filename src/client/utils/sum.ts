export const sum = (...arr: number[]) => {
    return arr.reduce((acc, el) => acc + el, 0);
}