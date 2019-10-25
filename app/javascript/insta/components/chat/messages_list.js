import React from 'react';
import Message from './message'
import MessageInput from './message_input'
// import '../../stylesheets/chat.css'
import logo192 from '../../images/logo192.png'

class MessageList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sample_message: [
                {
                    avatar: `${logo192}`,
                    user: 'velisjoel',
                    message: 'hello how are you today'
                },
            ],
        }
    }

    handleMessageSubmit = (input, username) => {
        this.setState(currentState => {
            return {
                sample_message: currentState.sample_message.concat([{
                    avatar: `${logo192}`,
                    user: username,
                    message: input 
                }])
            }
        })
    }

    render() {
        return (
            <div>
                {this.state.sample_message.map(message => {
                    return <Message 
                                message = {message.message} 
                                avatar = {message.avatar}
                                user = {message.user}
                            />
                })}
                <MessageInput handleMessageSubmit = {this.handleMessageSubmit} />
            </div>
        )
    }
}

export default MessageList;