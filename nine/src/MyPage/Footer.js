import React from 'react';
import style from "./Style/Footer.module.css"
import Visa from "../Img/Visa.png"

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.top_container}>
                <div className={style.top_left_items}>
                    <div style={{display: "inline-flex"}}>
                        <ul>
                            <li>Салют</li>
                            <li>SberBox</li>
                            <li>SberPortal</li>
                            <li>Магазин</li>
                        </ul>
                        <ul>
                            <li>SmartMarket</li>
                            <li>Разработчикам</li>
                            <li>Поддержка</li>
                            <li>Пресс-центр</li>
                            <li>О компании</li>
                        </ul>
                    </div>
                </div>
                <div className={style.top_right_items}>
                    <ul>
                        <li><h2>900</h2>Бесплатно с мобильного на территории РФ</li>
                        <li><h2>+7 (495) 500-55-50</h2>Телефон для звонков из любой точки мира — по тарифам вашего
                            оператора связи.
                        </li>
                        <li>Общество с ограниченной ответственностью «СберДевайсы». Москва, Кутузовский проспект, дом
                            32, кабинет 6.24. ОГРН 1197746592394
                        </li>
                    </ul>
                </div>
            </div>
            <div className={style.bottom_container}>
                <div className={style.bottom_left_content}>
                    <li>Условия продаж</li>
                    <li>Политика конфидициальности</li>
                    <li>Политика гарантийного обслуживания</li>
                </div>
                <div className={style.Visa}>
                    <img src={Visa} alt=""/>
                </div>

            </div>
        </div>
    );
};

export default Footer;