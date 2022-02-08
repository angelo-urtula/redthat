export const fetchUsers = () => {
    return (dispatch) => {
        dispatch({ type: "LOADING_USERS"});
        fetch("http://127.0.0.1:3001/users")
        .then((response) => {
            return response.json()
        })
        .then((responseJSON) => {
            dispatch({ type: "ADD_USERS", users: responseJSON})
        })
    }
}