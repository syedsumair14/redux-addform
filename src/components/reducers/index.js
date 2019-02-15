const init = {
    Data: [
    {Name: "Bond",
    Email: "bond@007.com",
    Password: "Sandwich",
    id: 0},
    {Name: "James",
    Email: "James@blunt.com",
    Password: "Burger",
    id: 1},
    {Name: "Jason",
    Email: "Jason@stathom.com",
    Password: "Bread",
    id: 2},
    {Name: "Abraham",
    Email: "Jason@john.com",
    Password: "Butter",
    id: 3}
    ]
}

const reduce = (state = init, action) => {
    switch(action.type){
        case "DELETE_USER":
        return "DELTE USER CASE"
        case "ADD_USER":
        console.log("REDUCER CALLED", action.payload);
        state.Data.push(action.payload)
        return state
        default:
        return state
    }
};

export const showReducer = (state=[], action) => {
    switch(action.type){
        case "SHOW_DATA":
        console.log("SHOW REDUCER CALLED")
        return action.payload
        default:
        return state
    }
}

export default reduce;