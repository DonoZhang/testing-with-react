import React, {Component} from 'react';
import './styles.scss';
import Logo from '../../assets/Logo.png';

const Header = (props) => {
    return (
        <header>
            <div className="wrap">
                <div className="logo">
                    <img src={Logo} alt="logo" />
                </div>
            </div>
        </header>
    );
}

export default Header;