import React from 'react';

function Comment(props) {
    return(
        <ul id='message'>
            <section>
                <li>
                    <img src={`${props.avatar}`} /> 
                </li>
            </section>
            <section>
                <li id='username'>
                    <strong>{props.user}</strong> 
                    <span> {props.comment} </span>
                </li>
            </section>
        </ul>
    )
}

export default Comment;