
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';

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
                        <Link to='/Login' className='pg-header__top__wrap__right__title'>Login</Link>
                        <Link to='/login' className='pg-header__top__wrap__right__title'>Login</Link>
                        <Link to='/login' className='pg-header__top__wrap__right__title'>Login</Link>
                    </div>
                </div>
                <div className="pg-header__mide__wrap__logo">
                    <Logo />
                </div>
                <div className="pg-header__bot__wrap">
                    <Link to='/outer' className='pg-header__bot__wrap__title'>OUTER</Link>
                    <Link to='/' className='pg-header__bot__wrap__title'>TOP</Link>
                    <Link to='/' className='pg-header__bot__wrap__title'>PANTS</Link>
                    <Link to='/' className='pg-header__bot__wrap__title'>SHIRTS</Link>
                    <Link to='/' className='pg-header__bot__wrap__title'>SHOES</Link>
                </div>
            </div>
        )
    }
}
