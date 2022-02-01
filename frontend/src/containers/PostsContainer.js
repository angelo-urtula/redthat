import React, { Component } from "react";
import { connect } from "react-redux";
import Posts from "../components/Posts"
import { fetchPosts } from "../actions/postActions"


class PostsContainer extends Component {
    componentDidMount(){
        this.props.fetchPosts()
    }
    render () {
        console.log(this.props.posts)
        return(
            <div>
                <Posts posts={this.props.posts} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.post.posts, 
        post_loading: state.post_loading}
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPosts: () => dispatch(fetchPosts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer)