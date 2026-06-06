export const Add_user = (user) => {
    return { type: "Add_user", payload: user };
};

export const Update_user = (user) => {
    return { type: "Update_user", payload: user };
};

export const Delete_user = (id) => {
    return { type: "Delete_user", payload: id };
};