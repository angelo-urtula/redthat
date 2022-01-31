import React, { Component } from 'react'
import User from './User'

class Users extends Component {
    renderUsers = () => {
        return this.props.users.map((user) => (
            <User user={user} key={user.id} />
        ))
    }
    render(){
        return (
        <div>
            {this.renderUsers()}
        </div>
        )
    }
}

export default Users