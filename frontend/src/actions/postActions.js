export const fetchPosts = () => {
    return (dispatch) => {
        dispatch({ type: "LOADING_POSTS"});
        fetch("http://localhost:9292/posts")
        .then((response) => {
            return response.json()
        })
        .then((responseJSON) => {
            dispatch({ type: "ADD_POSTS", posts: responseJSON})
        })
    }
}