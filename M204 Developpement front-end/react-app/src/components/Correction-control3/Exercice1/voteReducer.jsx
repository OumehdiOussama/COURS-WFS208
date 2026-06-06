const initialState = {
    Jamal: 0,
    Ali: 0,
    Ahmed: 0
};

const reducer =(state=initialState,action)=>{
  switch (action.type) {
    case "VOTE":
        return {...state,[action.payload]: state[action.payload] + 1};

    case "RESET":
      return initialState;

    default:
      return state;
    }
}
export default reducer;