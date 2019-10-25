import React from 'react'

class CommentInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            username: ''
        }
    }

    componentDidMount() {
        this.setState({
            username: 'another_user'
        })
    }

    handleInput = event => {
        this.setState({
            input: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleCommentSubmit(this.state.input, this.state.username)
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
                    placeholder='enter your comment here...'
                    class='form-control'
                    id="exampleInputEmail1"
                /> 
            </form>
        )
    }
}

export default CommentInput;