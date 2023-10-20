

import React from "react";
import css from './ContactForm.module.css'
import { nanoid } from 'nanoid';



class ContactForm extends React.Component {

    state = {
        name: '',
        number: ''
    };
    
    nameInputId = nanoid();
    numberInputId = nanoid();
    
    handleSubmit = event => {
        event.preventDefault();

        this.props.onSubmit({ name: this.state.name, number: this.state.number });
        this.reset();
    };
    


 handleInputChange = event => {
        const { name, value } = event.target;
        this.setState ({ [name]: value });
    };

    reset = () => {
        this.setState({ number: '', name: '' });
    };

   
    
    render() {
        return (
            <div className={css.contactForm}>
                <form className={css.form} onSubmit={this.handleSubmit}>
                    <label htmlFor={this.nameInputId}>
                        <p>Name
                        </p>
                        <input type="text"
                            name="name"
                            id={this.nameInputId}
                            value={this.state.name}
                            onChange={this.handleInputChange}
                            className={css.formInput}
                            placeholder="Name"
                            required>
                        </input>
                    </label>
                      <label htmlFor={this.numberInputId}>
                        <p>Number
                        </p>
                        <input type="tel"
                            name="number"
                            id={this.numberInputId}
                            value={this.state.number}
                            onChange={this.handleInputChange}
                            className={css.formInput} 
                            pattern="[0-9]{10}"
                            placeholder="(000)-000-00-00"
                            required>
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
