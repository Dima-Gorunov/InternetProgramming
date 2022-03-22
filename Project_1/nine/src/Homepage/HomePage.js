import React from 'react';
import Header from "../MyPage/Header";
import {Outlet} from "react-router-dom"
import Footer from "../MyPage/Footer";
import Body from "../MyPage/Body";

const HomePage = () => {
    return (
        <div>
            <Header/>
            <Body/>
            <Footer/>
        </div>
    );
};

export default HomePage;