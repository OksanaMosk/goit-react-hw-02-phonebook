

const ContactElement = ({ id, name, number, onRemoveContact }) => {

  return (
      
  <li key={id}>
          <p>{name + ':'}</p>
          <p>{number}</p>
        {
          <button
            type="button"
            name="delete"
            onClick={() => onRemoveContact(id)}
          >
            delete
          </button>
        }
      </li>
  )
};



export default ContactElement;
