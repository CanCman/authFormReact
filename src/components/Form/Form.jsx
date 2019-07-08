import React, { Component } from "react";

import FormFild from "../FormFild/FormFild.jsx"
import Submit from "../Submit/Submit.jsx"
import style from "./Form.sass";


class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: {},
            phone: {},
            email: {},
            isFill: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(fieldState) {
        this.setState( state => {
            Object.assign(state, fieldState);
            state.isFill = state.name.isValid && state.phone.isValid
            return state;
        });
    }

    handleSubmit(event) {

        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className='form'>
                <h2 className="form__title">Заголовок формы</h2>
                <FormFild id="name" 
                    type="text"
                    placeholder="Имя*"
                    pattern="^[а-яё\s]+$"
                    required={true}
                    onChangeHandler={this.handleChange} />
                <FormFild id="phone" 
                    type="text"
                    placeholder="Номер телефона*"
                    pattern="\+[\d]{4,16}"
                    required={true}
                    onChangeHandler={this.handleChange} />
                <FormFild id="email" 
                    type="text"
                    placeholder="Электронная почта"
                    pattern="^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$"
                    required={false}
                    onChangeHandler={this.handleChange} />
                <Submit 
                    isEnable={this.state.isFill}
                    value="Начать работу" />
                <p className="form__description">Нажимая кнопку «Отправить», я даю свое согласие на обработку персональных данных. 
                    <a className="form__policies" href="/fonts/calibri.ttf">&nbsp;Условия использования данных</a>
                </p>
            </form>
        );
    }
}
export default Form;