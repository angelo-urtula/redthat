const post = (state = { posts:[], post_loading: false }, action) => {
    switch (action.type) {
        case "LOADING_POSTS":
            return {
                ...state,                
                posts: [...state.posts],
                post_loading: true,
            };
        case "ADD_POSTS":
            return {
                ...state,
                
                posts: action.posts,
                post_loading: false,
            };
            default:
                return state
    }
}

export default post