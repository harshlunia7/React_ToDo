import React from 'react';
import '../App.css';
import Logo from '../todo_icon.png';

const Header = (props) => {
    return (
        <div className = "header">
            <img src={Logo} alt = "logo" className = "header__logo"></img>
            <div className = "app__name">To-Do App</div>
        </div>
    );
}

export default Header;