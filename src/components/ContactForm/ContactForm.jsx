

import React, { Component } from "react";
import css from './ContactForm.module.css'
import { nanoid } from 'nanoid';



class ContactForm extends React.Component {

    state = {
        name: '',
        number: ''
    };
    
    key = nanoid();
    
    handleInputChange = e => {
        const { name, value } = e.currentTarget;
        this.setState = ({ [name]: value });
    };


    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit({ name: this.state.name, number: this.state.number });
        this.reset();
    }

    reset = () => {
        this.setState({name: '', number: ''})
    }
    
    render() {
        return (
            <div className={css.contactForm}>
                <form className={css.form} onSubmit={this.handleSubmit}>
                    <label>
                        <p>Name
                        </p>
                        <input type="text" value={this.state.name} onChange={this.handleInputChange} className={css.formInput} name="name"required>
                        </input>
                    </label>
                      <label>
                        <p>Number
                        </p>
                        <input type="tel"value={this.state.number} onChange={this.handleInputChange} className={css.formInput} name="number" required>
                        </input>
                    </label>
                    <button type="submit" className={css.submitButton}>Add contact  
                    </button>
             </form>
            </div>
        )
    }

}


export default ContactForm;
