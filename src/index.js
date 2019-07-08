import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { BrowserRouter} from 'react-router-dom';
import style from "./index.sass";
import font from "./fonts/calibri.ttf";
import icon from "./images/submit-ok.svg";

ReactDOM.render((
        <App />
    ), document.querySelector("#root"));
