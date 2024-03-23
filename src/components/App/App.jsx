
import css from"../App/App.module.css";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import initialContacts from "../../initialContacts.json"
import { useState, useEffect } from "react";


function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [text, setText] = useState('');
  
  useEffect(() => {
    const storedContacts = window.localStorage.getItem('contacts');
    if (storedContacts) {
      setContacts (JSON.parse(storedContacts))
  }
}, []);

useEffect(() => {
  window.localStorage.setItem('contacts', JSON.stringify(contacts));
}, [contacts]);


  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  const visibleContacts = contacts.filter((contact) =>
  contact.name.toLowerCase().includes(text.toLowerCase())
);

const handleFormSubmit = (values) => {
  const newContact = {
    id: Date.now(),
    name: values.name,
    number: values.number,
  };
  addContact(newContact);
};

  return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm
        onFormSubmit={handleFormSubmit}
        onAdd={addContact}
         />
        
        <SearchBox
         value={text} onChange={setText} />
        <ContactList contacts={visibleContacts} onDelete={deleteContact}/>
      </div>
    
  );
}

export default App;
