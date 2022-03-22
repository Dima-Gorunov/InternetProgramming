import React from 'react';
import backgroundImg from "../Img/BodyBackground_1.jpg"
import style from "./Style/Body.module.css"
import dark_background from "../Img/dark_background.png"
import back_dark_element from "../Img/Back_dark_element.png"
import TV_element from "../Img/TV_element.png"
import MobileElement from "../Img/Mobile_element.png"
import Rectangle from "../Img/Rectangle 3991.png"
import GreenCircle from "../Img/green_circle.png"
import OrangeCircle from "../Img/orange_circle.png"
import PrimaryButton from "../CustomElement/PrimaryButton";

const Body = () => {
    return (
        <div>
            <div style={{display: "flex"}} className={style.body_top}>
                <div className={style.pr_top_text_container}>
                    <div className={style.pr_text}>
                        Виртуальные ассистенты Салют <br/> и устройства Sber
                    </div>
                    <div className={style.under_pr_text}>
                        Удобные и красивые устройства <br/> на каждый день
                    </div>
                    <div>
                        <PrimaryButton>
                            Смотреть
                        </PrimaryButton>
                    </div>
                </div>
                <div className={style.top_image_container}>
                    <img src={backgroundImg} className={style.image} alt=""/>
                </div>
            </div>
            <div style={{display: "flex"}} className={style.body_center}>
                <div className={style.pr_center_text_container}>
                    <div className={style.pr_text}>
                        SmartMarket разработчикам и бизнесу
                    </div>
                    <div className={style.under_pr_text}>
                        Создавайте и монетизируйте приложения с помощью нового маркета приложений Sber
                    </div>
                    <div>
                        <PrimaryButton>
                            Продробнее
                        </PrimaryButton>
                    </div>
                </div>
                <div className={style.center_image_container}>
                    <img src={back_dark_element} className={style.image_foreground} alt=""/>
                    <img src={TV_element} className={style.TV_image} alt=""/>
                    <img src={MobileElement} className={style.Mobile_element} alt=""/>
                    <img src={dark_background} alt=""/>
                </div>
            </div>
            <div className={style.body_bottom}>
                <div className={style.bottom_container}>
                    <div className={style.Circle}>
                        <img src={OrangeCircle} className={style.Orange} alt=""/>
                    </div>
                    <div className={style.Circle}>
                        <img src={GreenCircle} className={style.Green} alt=""/>
                    </div>
                    <div className={style.Circle_backdrop}/>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <div className={style.pr_buttom_text_container}>
                            <div className={style.pr_text}>
                                О SberDevices
                            </div>
                            <div className={style.under_pr_text}>
                                Давайте знакомиться! Мы работаем над нашими продуктами, чтобы сделать вашу жизнь удобнее
                            </div>
                            <div>
                                <div>
                                    <a href="" className={style.primary_button_Grey}>О компании</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;