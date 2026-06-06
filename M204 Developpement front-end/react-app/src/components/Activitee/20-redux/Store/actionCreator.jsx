export const incrementer = () => {
    return {type: "inc"}
}
export const decrementer = (p) => {
    return {type: "dec",payload: p}
}
export const reset = (p) => {
    return {type: "reset",payload: p}
}