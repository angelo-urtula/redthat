import React, { Component } from 'react'
import Post from './Post'

class Posts extends Component {
    renderPosts = () => {
        return this.props.posts.map((post) => (
            <Post post={post} key={post.id} />
        ))
    }
    render(){
        return (
        <div>
            {this.renderPosts()}
        </div>
        )
    }
}

export default Posts