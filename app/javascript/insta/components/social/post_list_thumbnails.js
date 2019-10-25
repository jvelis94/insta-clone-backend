import React from 'react'

function PostListThumbnails(props) {
    return (
        <ul id='photo-thumbnails'>
            {props.posts.map(post => {
                return <li><img src={post.photo}/></li>
            })}
        </ul>
    )
}

export default PostListThumbnails