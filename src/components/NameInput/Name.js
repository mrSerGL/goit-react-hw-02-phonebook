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

  // жорстко закодувати значення id для елементів input, так і для елементів label.
  nameInputId1 = nanoid();
  nameInputId2 = nanoid();

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
        <Chapter title="Name">
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
        <Chapter title="Number">
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
          Add contact
        </button>
      </form>
    );
  }
}
export default Name;
