import React, { Component } from "react";
import style from './Success.sass';

class Success extends Component {

    render() {
        return (
            <div className="form-success">
                <img className="form-success__icon" src="images/submit-ok.svg" alt="success" />
                <span className="form-success__request">Заявка отправлна!</span>
                <span className="form-success__description">Менеджер уже звонит, посмотрите на телефон.</span>
            </div>
        )

    }
}

export default Success;