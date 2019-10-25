import React from 'react';
import Comment from './comment'
import CommentInput from './comment_input'
// import '../../stylesheets/chat.css'
import walrus from '../../images/walrus.jpg'

class CommentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sample_comment: [
                {
                    avatar: `${walrus}`,
                    user: 'velisjoel',
                    comment: 'hello how are you today'
                },
            ],
        }
    }

    handleCommentSubmit = (input, username) => {
        this.setState(currentState => {
            return {
                sample_comment: currentState.sample_comment.concat([{
                    avatar: `${walrus}`,
                    user: username,
                    comment: input 
                }])
            }
        })
    }

    render() {
        return (
            <div>
                {this.state.sample_comment.map(comment => {
                    return <Comment 
                                comment = {comment.comment} 
                                avatar = {comment.avatar}
                                user = {comment.user}
                            />
                })}
                <CommentInput handleCommentSubmit = {this.handleCommentSubmit} />
            </div>
        )
    }
}

export default CommentList;