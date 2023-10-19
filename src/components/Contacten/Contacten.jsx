
import React from "react";
import { nanoid } from 'nanoid';


const Contacten = ({ name, number}) => {

    return (
        <li key={nanoid()}>{name}: {number}</li>
    )
}

export default Contacten;