import { Component } from "react";

import { nanoid } from "nanoid";

import ContactForm from "./ContactForm/ContactForm.jsx";
import ContactList from "./ContactList/ContactList.jsx";
import Filter from "./Filter/Filter.jsx";

import s from "./App.module.css";

class App extends Component {

  state = {
    contacts: [ {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
    filter: '',
  }

  

  addNewContact = (name, number) => {
    const { contacts } = this.state;
    const newContact = {
      id: nanoid(),
      name,
      number,
    }

    const normalazedNewContactName = newContact.name.toLocaleLowerCase();

    if (contacts.find(contact => contact.name.toLocaleLowerCase() === normalazedNewContactName)) {
      alert(`${newContact.name} is already in contacts`)
      return;
    };

    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  changeFilter = (event) => {
    this.setState({ filter: event.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter),
    )
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }))
  };

  render() {
    const { contacts, filter } = this.state;
    const getFilteredContacts = this.getFilteredContacts();
    const addNewContact = this.addNewContact;
    const changeFilter = this.changeFilter;
    const deleteContact = this.deleteContact;
    return (
      <div className={s.App}>
        <div className={s.Phonebook}>
          <h1>Phonebook</h1>
        <ContactForm onSubmit={addNewContact} contacts={contacts} />
        <h2>Contacts</h2>
        <Filter value={filter}
        onChange={changeFilter}
        />
        <ContactList
          contacts={getFilteredContacts} onDeleteContact={deleteContact} />
        </div>
      </div>
    )
  }
};

export default App;