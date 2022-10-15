import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./Redux/ReduxStore";


// задачи

let myArray = [1, 4, 7, 8, 9, 0, 4, 7, 1, 0];
console.log(myArray);

const sortMass = (mas) => {
    mas.sort(e => e = 0)
}

sortMass(myArray);

console.log(myArray);


//


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
);

