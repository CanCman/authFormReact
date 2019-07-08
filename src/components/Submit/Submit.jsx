import React, { Component } from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import style from "./Submit.sass";
import Success from "../Success/Success.jsx";

class Submit extends Component {

    render() {
        const props = this.props;
        const className = `form__submit ${props.isEnable ? 'form__submit_enable' : 'form__submit_disable'}`;

        return (
            <Link to="success" className={props.isEnable ? '' : 'form__link_disabled'}>
                <input type="submit" className={className} value={props.value} />
            </Link>
        );
    }
}

export default Submit;