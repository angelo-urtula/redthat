export const fetchPosts = () => {
    return (dispatch) => {
        dispatch({ type: "LOADING_POSTS"});
        fetch("http://172.25.95.70:9292/posts")
        .then((response) => {
            return response.json()
        })
        .then((responseJSON) => {
            dispatch({ type: "ADD_POSTS", posts: responseJSON})
        })
    }
}