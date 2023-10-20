import React,{Component} from "react";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";

import Filter from "../Filter/Filter";
import { nanoid } from 'nanoid';

import css from './App.module.css'


class App extends Component {state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
filter: '',
  };

  handleAddContact = (contact) => {
    const isContacts = this.state.contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );
  
    console.log("isInContacts:", { isContacts })

    if (isContacts) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    this.setState(prevState => ({
      contacts: [{ id: nanoid(), ...contact }, ...prevState.contacts],
    }));
  }
  



changeFilter = event => {
    this.setState({ filter: event.target.value });
  };




  visibleContacts = () => {
    const { filter, contacts } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };


  removeContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };



  render() {
    const visContacts = this.visibleContacts();
    
    const { filter } = this.state;

    return (
    <div className={css.container}>
            <h1 className={css.title}>Phonebook</h1>
        <ContactForm onSubmit ={this.handleAddContact} />
            <h2>Contacts</h2>
           {this.state.contacts.length > 0 ? (
        <Filter value={filter} onChangeFilter={this.changeFilter} />
              ) : (
           <p>&#128064;Add your first contact! Your phonebook is empty.&#128064;</p>
               )}
              {this.state.contacts.length > 0 && (
        <ContactList
            contacts={visContacts}
            onRemoveContact={this.removeContact}
          />
        )}
    </div>

    )
  }

};

export default App;