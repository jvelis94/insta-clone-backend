import React from 'react'
import Post from './post'

function PostList(props) {
    return (
        <div>
            {props.posts.map(post => {
                return <Post post = {post} />
            })}
        </div>
    )
}

export default PostList