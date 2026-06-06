const initialState = { 
    Vols: [], 
    selectedVol: null 
};

function reducer(state=initialState, action) {
    switch(action.type) {
        case "SetVols":
            return { ...state, Vols: action.payload };
        case "SelectVols":
            return { ...state, selectedVol: action.payload };
        case "Ajouter_Service":
            return state;
        default:
            return state;
    }
}
export default reducer;