import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Chapter from 'components/Chapter';
import css from './Name.module.css';

class Name extends Component {
  state = {
    id: '',
    name: '',
    number: '',
  };


  // nameInputId1 = nanoid();
  // nameInputId2 = nanoid();

  handleChangeName = event => {
    const id = nanoid();

    this.setState({
      id: id,
      name: event.currentTarget.value,
    });
  };

  handleChangeNumber = event => {
    const id = nanoid();

    this.setState({
      id: id,
      number: event.currentTarget.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    console.log(this.props.myContacts)

    const existingContact = this.props.myContacts.find(
      contact =>
        contact.name.toLowerCase() === this.state.name.toLowerCase() ||
        contact.number === this.state.number
    );
  
    if (existingContact) {
      alert(`${this.state.name} is already exists in contacts!`);
      return;
    }

    // const { name, number } = this.state;

    // if (this.props.myContacts.some(contact => contact.name === name)) {
    //   alert(`${name} is already exists in contacts!`);
    //   return;
    // }

    this.props.onSubmit(this.state);

    this.setState({
      id: '',
      name: '',
      number: '',
    });

    const formRef = document.querySelector('form');
    formRef.reset();
  };


  // =============== render area ======================
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Chapter title="name">
          <label htmlFor={this.nameInputId1}>
            <input
              type="text"
              id={this.nameInputId1}
              className={css.input}
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChangeName}
            />
          </label>
        </Chapter>
        <Chapter title="number">
          <label htmlFor={this.nameInputId2}>
            <input
              type="tel"
              id={this.nameInputId2}
              className={css.input}
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleChangeNumber}
            />
          </label>
        </Chapter>
        <button type="submit" className={css.button}>
          add contact
        </button>
      </form>
    );
  }
}
export default Name;
