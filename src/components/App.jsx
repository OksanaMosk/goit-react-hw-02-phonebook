import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import css from './App.module.css'


export const App = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm/>
      <ContactList/>
    </div>
  );
};
