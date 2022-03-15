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
            <div style={{display:"flex"}}>
                <div className={style.pr_text_container}>
                    <div className={style.pr_text}>
                        Виртуальные ассистенты Салют <br/> и устройства Sber
                    </div>
                    <div className={style.under_pr_text}>
                        Удобные и красивые устройства на каждый день
                    </div>
                    <div className={style.primary_button}>
                        <a href="/">Смотреть</a>
                    </div>

                </div>
            </div>
            <div className={style.image_container}>
                <img src={backgroundImg} className={style.image} alt=""/>
            </div>
        </div>
    );
};

export default Body;