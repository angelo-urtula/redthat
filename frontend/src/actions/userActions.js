export const fetchUsers = () => {
    return (dispatch) => {
        dispatch({ type: "LOADING_USERS"});
        fetch("http://localhost:9292/users")
        .then((response) => {
            return response.json()
        })
        .then((responseJSON) => {
            dispatch({ type: "ADD_USERS", users: responseJSON})
        })
    }
}