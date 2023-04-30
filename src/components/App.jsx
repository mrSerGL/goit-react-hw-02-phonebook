import React, { Component } from 'react';
import Name from './NameInput/Name';
import Chapter from './Chapter';
import Contacts from './ContactsList';

import css from './App.module.css';

class App extends Component {
  // state = {
  //   contacts: [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ],
  //   filter: '',
  // };

  state = {
    contacts: [],
    name: '',
  };

  addContact = contact => {
    console.log(contact);
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  render() {
    return (
      <div className={css.section}>
        <Chapter title="Phonebook">
          <Name onSubmit={this.addContact} />
        </Chapter>
        {this.state.contacts.length > 0 && (
          <Chapter title="Contacts">
            <Contacts data={this.state} />
          </Chapter>
        )}
      </div>
    );
  }
}

export default App;
