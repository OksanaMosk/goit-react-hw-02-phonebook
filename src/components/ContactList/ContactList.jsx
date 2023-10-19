import React from "react";

import Contacten from "../Contacten/Contacten";


import { nanoid } from 'nanoid';


const ContactList = ({ itemContacts}) => {
    return (
        <ul>
            {itemContacts.map(item => (
                <Contacten
                    key={nanoid()}
                    name={item.name}
                    number={item.number}
                />
            ))
            }
        </ul>
    )
}
console.log(ContactList);
export default ContactList;

