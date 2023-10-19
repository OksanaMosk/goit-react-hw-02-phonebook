import { Component } from "react";
import css from './ContactList.module.css';

export default class ContactList extends Component {
    state = {
  contacts: [],
  name: ''
}
    handleAddContact = (contacts) => {
console.log ('contacts:', contacts)
    }
    render() {
        return
    }

}
