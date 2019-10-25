import React from 'react'
// import '../../stylesheets/social.css'
import PostList from './post_list'
import PostListThumbnails from './post_list_thumbnails'
import puppy from '../../images/puppy.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBorderAll } from '@fortawesome/free-solid-svg-icons'



class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            grid: true,
            avatar: `${puppy}`,
            name: 'Joel Velis',
            username: 'velisjoel',
            caption: 'software developer',
            posts_count: 20,
            followers_count: 500,
            following_count: 100,
            posts: [
                {
                    photo: `${puppy}`,
                    caption: 'Fun times',
                    avatar: `${puppy}`,
                    username: 'velisjoel'
                },
                {
                    photo: `${puppy}`,
                    caption: 'Fun times',
                    avatar: `${puppy}`,
                    username: 'velisjoel'
                },
                {
                    photo: `${puppy}`,
                    caption: 'Fun times',
                    avatar: `${puppy}`,
                    username: 'velisjoel'
                },
                {
                    photo: `${puppy}`,
                    caption: 'Fun times',
                    avatar: `${puppy}`,
                    username: 'velisjoel'
                },
                {
                    photo: `${puppy}`,
                    caption: 'Fun times',
                    avatar: `${puppy}`,
                },
                {
                    photo: `${puppy}`,
                    caption: 'Fun times',
                    avatar: `${puppy}`,
                    username: 'velisjoel'
                }
            ]
        }
    }

    componentDidMount() {
        fetch("/api/v1/profile")
        .then(response => response.json())
        .then(data => {
            this.setState({
                projects: data
            })
        })
        .catch(console.log)
        
    }

    gridTrue = () => {
        this.setState({
            grid: true
        })
    }

    gridFalse = () => {
        this.setState({
            grid: false
        })
    }

    render() {
        let display;
        if (this.state.grid) {
            display = <PostListThumbnails posts = {this.state.posts} />
        }
        else {
            display = <PostList posts = {this.state.posts} />
        }

        return (
            <div id='profile'>
                <section id='profile-top'>
                        <ul>
                            <li>
                                <img id='profile-img' src={`${this.state.avatar}`}/>
                            </li>
                            <li>
                                <strong>{this.state.posts_count}</strong><br/>
                                Posts
                            </li>
                            <li>
                                <strong>{this.state.followers_count}</strong><br/>
                                Followers
                            </li>
                            <li>
                                <strong>{this.state.following_count}</strong><br/>
                                Following
                            </li>
                        </ul>
                    <section id='profile-name-caption'>
                        <h6><strong>{this.state.name}</strong></h6>
                        <p>{this.state.caption}</p>
                    </section>
                </section>
                <section id='view-options'>
                    <FontAwesomeIcon icon={faBorderAll} onClick={this.gridTrue} />
                    <FontAwesomeIcon icon={faBars} onClick={this.gridFalse}/>
                </section>
                {display}
            </div>
        )
    }
}

export default Profile