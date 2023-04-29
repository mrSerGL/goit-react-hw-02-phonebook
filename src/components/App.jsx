import React, { Component } from 'react';
import Name from './Name/Name';
import Chapter from './Chapter';
import css from './App.module.css';

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',

  }

  addContact = contact => {

  //   this.setState(({ todos }) => ({
  //     contacts: [todo, ...todos],
  //   }));

console.log('app:', contact)

  };

  render() {
    return (
      <div className={css.section}>
        <Chapter title="Phonebook">
          <Name onSubmit={this.addContact}/>
        </Chapter>
      </div>
    );
  }
}

export default App;
