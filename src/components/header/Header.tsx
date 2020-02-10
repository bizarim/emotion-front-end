
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

interface Props {

}
interface State {

}

export default class Header extends Component<Props, State> {
    state = {}

    render() {
        return (
            <div className="header">
                <div className="header_top_wrap">
                    <div className="header_top_wrap__left">
                        {/* +BOOKMARKCS CENTER EVENT REVIEW MEMBERSHIP LOGIN JOIN MY PAGEORDER */}
                        <Link to='/' className='item'>Home</Link>
                        <Link to='/login' className='item'>Login</Link>
                    </div>
                    <div className="header_top_wrap__right"></div>
                </div>
                <div className="header_mide_wrap"></div>
                <div className="header_bot_wrap"></div>
            </div>
        )
    }
}
