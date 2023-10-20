import React,{Component} from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";

import css from './App.module.css'


class App extends Component {state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],

  };

  handleAddContact = (contact) => {
    const isInContacts = this.state.contacts.some (
        ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );
  
     console.log("isInContacts:", isInContacts)
    if (isInContacts) alert(`${contact.name} is already in contacts`);
    return;
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

export default App;