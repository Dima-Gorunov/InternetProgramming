import logo from './logo.svg';
import style from './TestContainer/Test.module.css';
import "bootstrap/dist/css/bootstrap.min.css"
import HomepageContainer from "./HomePage/Homepage";
import React from "react";

function App() {
    return (
        <div className={style.App}>
            <HomepageContainer/>
        </div>
    );
}

export default App;
