import React, { Component } from "react";
import { connect } from "react-redux";
import Users from "../components/Users"
import { fetchUsers } from "../actions/userActions"


class UsersContainer extends Component {
    componentDidMount(){
        this.props.fetchUsers()
    }
    render () {
        console.log(this.props.users)
        return(
            <div>
                <Users users={this.props.users} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.user.users, 
        user_loading: state.user.user_loading}
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)