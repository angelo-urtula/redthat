import React from "react"

const Post = (props) => {
    return (
        <div>
            <div>
            {props.post.title}
            </div>
            <p>
            {props.post.content}
            </p>
        </div>
        
    )
}

export default Post