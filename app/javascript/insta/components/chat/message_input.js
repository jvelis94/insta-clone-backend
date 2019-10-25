import React from 'react'

class MessageInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            username: ''
        }
    }

    componentDidMount() {
        this.setState({
            username: prompt('enter username')
        })
    }

    handleInput = event => {
        this.setState({
            input: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleMessageSubmit(this.state.input, this.state.username)
        this.setState({
            input: ''
        })
    }

    render() {
        return (
            <form id='message-input' onSubmit={this.handleSubmit}>
                <input 
                    type='text' 
                    value={this.state.input} 
                    onChange={this.handleInput} 
                    placeholder='enter your message here...'
                    autoFocus={true}
                    class='form-control'
                    id="exampleInputEmail1"
                /> 
            </form>
        )
    }
}

export default MessageInput;