import React from 'react';
import backgroundImg from "../Img/BodyBackground_1.jpg"
import background_zero from "../Img/BodyBackground_0.png"
import style from "./Style/Body.module.css"

const Body = () => {
    return (
        <div className={style.body}>
            <div className={style.back_image}>
                <img src={background_zero} alt=""/>
            </div>
            <div className={style.pr_text}>
                <div>
                    Виртуальные ассистенты Салют <br/> и устройства Sber
                </div>
                <div className={style.under_pr_text}>
                    Удобные и красивые устройства на каждый день
                </div>
            </div>
            <div className={style.image_container}>
                <img src={backgroundImg} className={style.image} alt=""/>
            </div>
        </div>
    );
};

export default Body;