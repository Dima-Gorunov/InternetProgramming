import logo from './logo.svg';
import style from './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Homepage from "./HomePage/Homepage";

function App() {
    return (
        <div className={style.App}>
            <Homepage/>
        </div>
    );
}

export default App;
