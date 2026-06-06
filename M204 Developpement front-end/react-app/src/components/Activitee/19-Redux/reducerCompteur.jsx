const initialState = {
  count: 0
};

function reducerCompteur(state = initialState, action) {
  switch(action.type) {
    case "inc":
      return { ...state, count: state.count + 1 };

    case "dec":
      return { ...state, count: state.count - 1 };

    case "reset":
      return { ...state, count: action.payload };

    default:
      return state;
  }
}

export default reducerCompteur;