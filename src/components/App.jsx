import React from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Contacten from "./Contacten/Contacten";
import css from './App.module.css'


export default class App extends React.Component {

state = {

  name: '',
  number: ''
}

   handleAddContact=(itemContacts) => {
console.log ("itemContacts:", itemContacts)
  }


  render() {


    return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
        <ContactForm handleAddContact={this.handleAddContact} />
        
        
        {!this.key == null
          ? (
            <ContactList
              key={this.key}
              name={this.name}
              number={this.number} />)
         : (console.log ("нема ключа"))} 
    </div>
 
  
    )
  }

};
