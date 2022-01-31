import React, { Component } from "react";
import { connect } from "react-redux";
import Users from "../components/Users"
import { fetchUsers } from "../actions/userActions"


class UsersContainer extends Component {
    componentDidMount(){
        console.log("this component mounted")
        console.log(this.props)
        this.props.fetchUsers()
    }
    render () {
        console.log(this.props.users)
        return(
            <div>
                Hi
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users, 
        loading: state.loading}
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)