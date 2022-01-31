const postReducer = (state = { posts:[], loading: false }, action) => {
    switch (action.type) {
        case "LOADING_POSTS":
            return {
                ...state,
                
                post: [...state.posts],
                loading: true,
            };
        case "ADD_POSTS":
            return {
                ...state,
                
                post: action.posts,
                loading: false,
            };
            default:
                return state
    }
}

export default postReducer