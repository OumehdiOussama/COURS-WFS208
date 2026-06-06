const initialState = {
    users: [
        { id: 1, name: "Ahmed", email: "Ahmed@test" },
        { id: 2, name: "Jamal", email: "Jamal@test" },
        { id: 3, name: "test", email: "tes@gmail.com" }
    ]
};

function Reducer(state = initialState, action) {
    switch(action.type) {
        case "Add_user":
            return {...state, users:[...state.users, action.payload]}
        case "Update_user":
            const updatedUsers = state.users.map(e => {
                if (e.id === parseInt(action.payload.id)) {
                    return {
                        ...e, 
                        name: action.payload.name, 
                        email: action.payload.email
                    };
                } else {
                    return e;
                }
            });
            return { ...state, users: updatedUsers };

        case "Delete_user":
            return {...state, users:[...state.users.filter((e)=>e.id !== parseInt(action.payload))]}
        default:
            return state;
    }
}
export default Reducer;