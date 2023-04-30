import React, { Component } from 'react';
import Name from './NameInput/Name';
import Chapter from './Chapter';
import Contacts from './ContactsList';
import FilterInput from './FilterInput';

import css from './App.module.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  // state = {
  //   contacts: [],
  //   name: '',
  // };

  addContact = contact => {
    // console.log(contact);
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  onChangeFilter =(event)=>{
 
  this.setState({filter: event.target.value })
  console.log(this.state.filter)
  };

  render() {

  const {filter, contacts} = this.state;

  const filterToLoverCase = this.state.filter.toLowerCase();    
  const filteredContacts = contacts.filter(contact=> contact.name.toLowerCase().includes(filterToLoverCase));



  // console.log(filteredContacts)


    return (
      <>
        <div className={css.section}>
          <Chapter title="Phonebook">
            <Name onSubmit={this.addContact} />
          </Chapter>
        </div>

        {this.state.contacts.length > 0 && (
          <div className={css.section}>
          <Chapter title="Contacts">
            <FilterInput value={filter}  onChangeFilter={this.onChangeFilter}/>
            <Contacts data={filteredContacts} />
          </Chapter>
          </div>
        )}
      </>
    );
  }
}

export default App;
