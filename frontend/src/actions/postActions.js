export const fetchPosts = () => {
    return (dispatch) => {
        dispatch({ type: "LOADING_POSTS"});
        fetch("http://127.0.0.1:3001/posts")
        .then((response) => {
            return response.json()
        })
        .then((responseJSON) => {
            dispatch({ type: "ADD_POSTS", posts: responseJSON})
        })
    }
}