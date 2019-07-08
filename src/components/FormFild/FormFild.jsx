import React, { Component } from "react";
import style from "./FormField.sass";

class FormField extends Component {

    constructor(props) {
        super(props);
        this.state = {lengthText: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        if (this.props.id === 'phone') {
            let text = event.target.value;
            event.target.value = text === '' || text === '+' ? '+' : '';
        }
    }

    handleChange(event) {
        const regExpObj = new RegExp(this.props.pattern, 'i');
        const isValid = regExpObj.test(event.target.value);
        const objState = {};
        objState[this.props.id] = {
            value: event.target.value, 
            isValid: isValid
        };
        this.props.onChangeHandler(objState);
    }

    render() {
        const props = this.props;
        return (
            <input 
                type={props.type}
                className={`form__input form__input_${props.id}`} 
                placeholder={props.placeholder}
                onChange={this.handleChange}
                onClick={this.handleClick}/>
        );
    }
}

export default FormField;