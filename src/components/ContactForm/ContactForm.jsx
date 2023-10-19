

import React, { Component } from "react";
import css from './ContactForm.module.css'
import { nanoid } from 'nanoid';



export default class ContactForm extends Component {
    handleSubmit = (event) => {
        event.preventDefault();
        const name = event.currentTarget.elements.name.value;
        const number = event.currentTarget.elements.number.value;
        const key = nanoid();
        const itemContacts = { name, number, key};

this.props.handleAddContact(itemContacts)
    }
    render() {
        return (
            <div className={css.contactForm}>
                <form className={css.form} onSubmit={this.handleSubmit}>
                    <label>
                        <p>Name
                        </p>
                        <input type="text" className={css.formInput} name="name"required>
                        </input>
                    </label>
                      <label>
                        <p>Number
                        </p>
                        <input type="tel" className={css.formInput} name="number" required>
                        </input>
                    </label>
                    <button type="submit" className={css.submitButton}>Add contact  
                    </button>
             </form>
            </div>
        )
    }

}



