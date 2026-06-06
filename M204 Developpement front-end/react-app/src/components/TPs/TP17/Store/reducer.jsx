const initialState = {
    count: 0
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "inc":
            return {...state,count: state.count + action.payload};
        case "dec":
            return {...state,count: state.count - action.payload};
        default:
            return state;
    }
}
export default reducer;