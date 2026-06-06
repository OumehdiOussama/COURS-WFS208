export const incrementer = (p) => {
    return {type: "inc",payload: p}
}
export const decrementer = (p) => {
    return {type: "dec",payload: p}
}