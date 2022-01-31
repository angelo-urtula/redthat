const userReducer = (state = { users:[], loading: false }, action) => {
    switch (action.type) {
        case "LOADING_USERS":
            return {
                ...state,
                
                user: [...state.users],
                loading: true,
            };
        case "ADD_USERS":
            return {
                ...state,
                
                user: action.users,
                loading: false,
            };
            default:
                return state
    }
}

export default userReducer