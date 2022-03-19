import logo from './logo.svg';
import Header from "./MyPage/Header";
import Body from "./MyPage/Body";
import Footer from "./MyPage/Footer";
import style from "./App.module.css"

function App() {
    return (
        <div className={style.App}>
            <div className={style.container}>
                <Header/>
                <Body/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
