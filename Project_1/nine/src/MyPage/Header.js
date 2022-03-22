import React from 'react';
import style from "./Style/Header.module.css"
import Logo from "./HeaderElement/Logo";
import HeaderMenu from "./HeaderElement/HeaderMenu";

const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.Logo}>
                <Logo/>
            </div>
            <div className={style.MenuElement}>
                <HeaderMenu/>
            </div>
        </div>
    );
};

export default Header;