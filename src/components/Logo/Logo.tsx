import React from 'react'
import logo from '../../assets/logo.svg';

interface Props {
    
}

const Logo: React.FC<Props> = () => {
    return (<img src={logo} alt='logo' />);
}

export default Logo 
