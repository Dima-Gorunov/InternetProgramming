import logo from './logo.svg';
import Header from "./MyPage/Header";
import Body from "./MyPage/Body";
import Footer from "./MyPage/Footer";
import style from "./App.module.css"
import React from "react";
import HomePage from "./Homepage/HomePage";

function App() {
    return (
        <div className={style.App}>
            <div className={style.container}>
                <HomePage/>
            </div>
        </div>
    );
}

export default App;
