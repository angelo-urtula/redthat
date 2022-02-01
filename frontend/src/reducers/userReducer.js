const user = (state = { users:[], user_loading: false }, action) => {
    switch (action.type) {
        case "LOADING_USERS":
            return {
                ...state,                
                users: [...state.users],
                user_loading: true,
            };
        case "ADD_USERS":
            return {
                ...state,                
                users: action.users,
                user_loading: false,
            };
            default:
                return state
    }
}

export default user