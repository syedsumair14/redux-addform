
export const show = (card) => {
    return {
        type: "SHOW_DATA",
        payload: card
    }
};

export const Add = (name, email, pass) => {
    return {
        type: "ADD_USER",
        payload:
         {
            Name: name,
            Email: email,
            Password: pass
        }
    }
};

export const Del = (i) => {
    return{
        type: "DELETE_USER",
        payload: i
    }
}