import React from "react";


import ContactElement from "../ContactElement/ContactElement";





  const ContactList = ({ contacts, onRemoveContact }) => (
  <ul>
      {contacts.map(({ name, number, id }) => (
        <ContactElement
          key={id}
          name={name}
          number={number}
          id={id}
          onRemoveContact={onRemoveContact}
        />
    ))}
  </ul>
);

console.log(ContactList);
export default ContactList;

