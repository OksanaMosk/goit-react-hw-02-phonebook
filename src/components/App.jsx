import React from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";

import css from './App.module.css'


export default class App extends React.Component {

state = {
    contactelements: this.itemContacts,
  }
 

   handleAddContact=(itemContacts) => {
     console.log("itemContacts:", itemContacts)
     if (this.state.contactelements.some((contact) => contact.name === this.itemContacts.name)) {
  alert ('oops!')
}
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
