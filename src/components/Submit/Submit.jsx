import React, { Component } from "react";
import style from "./Submit.sass";

class Submit extends Component {

    render() {
        const props = this.props;
        const className = `form__submit ${props.isEnable ? 'form__submit_enable' : 'form__submit_disable'}`;

        return (
            <input type="submit" className={className} value={props.value} />
        );
    }
}

export default Submit;