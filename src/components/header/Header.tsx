
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
            <div className="pg-header">
                <div className="pg-header__top__wrap">
                    <div className="pg-header__top__wrap__left">
                        {/* +BOOKMARKCS CENTER EVENT REVIEW MEMBERSHIP LOGIN JOIN MY PAGEORDER */}
                        <Link to='/' className='pg-header__top__wrap__left__title'>+BOOKMARKC</Link>
                        <Link to='/' className='pg-header__top__wrap__left__title'>+BOOKMARKC</Link>
                        <Link to='/' className='pg-header__top__wrap__left__title'>+BOOKMARKC</Link>
                    </div>
                    <div className="pg-header__top__wrap__right">
                        <Link to='/login' className='pg-header__top__wrap__right__title'>Login</Link>
                        <Link to='/login' className='pg-header__top__wrap__right__title'>Login</Link>
                        <Link to='/login' className='pg-header__top__wrap__right__title'>Login</Link>
                    </div>
                </div>
                <div className="pg-header__mide__wrap"></div>
                <div className="pg-header__bot__wrap"></div>
            </div>
        )
    }
}
