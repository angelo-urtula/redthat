export const fetchUsers = () => {
    return (dispatch) => {
        dispatch({ type: "LOADING_USERS"});
        fetch("http://172.25.95.70:9292/users")
        .then((response) => {
            return response.json()
        })
        .then((responseJSON) => {
            responseJSON.map((user) => console.log(user))
        })
    }
}