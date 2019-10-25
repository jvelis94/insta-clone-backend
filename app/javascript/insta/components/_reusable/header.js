import React from 'react'
// import '../../stylesheets/social.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

class Header extends React.Component {
    render() {
        return (
            <div id='header-wrapper'>
                <Link to={'/'} >
                    <h6 id='header-title'>Instagram</h6>
                </Link>
                <Link to={'/messages'}>
                    <FontAwesomeIcon icon={faPaperPlane} id='message-icon' />
                </Link>
            </div>
        )
    }
}

export default Header