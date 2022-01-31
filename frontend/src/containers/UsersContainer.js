import React, { Component } from "react";
import { connect } from "react-redux";
import Users from "../components/Users"

class UsersContainer extends Component {
    render () {
        return(
            <div>
                <Users users={this.props.users} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {users: state.users}
}

export default connect(mapStateToProps)(UsersContainer)