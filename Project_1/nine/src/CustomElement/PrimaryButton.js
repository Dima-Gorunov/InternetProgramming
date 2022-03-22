import React from 'react';
import style from './PrimaryButton.module.css'
import {Link, NavLink} from "react-router-dom";

const PrimaryButton = (props) => {
    return (
        <a className={style.primary_button}>
            {props.children}
        </a>
    );
};

export default PrimaryButton;