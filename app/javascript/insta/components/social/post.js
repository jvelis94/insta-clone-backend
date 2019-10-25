import React from 'react'
import CommentList from './comment_list'

function Post(props) {
    return (
        <div>
            <section id='post-top'>
                <img src={`${props.post.avatar}`} /><span><strong>{props.post.username} </strong></span>
            </section>
            <img id='post-image' src={`${props.post.photo}`} />
            <section id='post-bottom'>
                <p><strong>{props.post.username} </strong><span>{props.post.caption}</span></p>
            </section>
            <CommentList />
            <hr/>

        </div>
    )
}

export default Post