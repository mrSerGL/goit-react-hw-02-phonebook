import React, { Component } from 'react';
import css from './PhoneInput.module.css';

class PhoneInput extends Component {
    state = {
        contacts: [],
        name: '',
        number: ''
      }

nameInputId = nanoid();      

render() {
return (
    <form onSubmit={this.handleSubmit}>
    <Chapter title="Name">
      <label htmlFor={this.nameInputId}>
        <input
          type="text"
          id={this.nameInputId}
          className={css.input}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.handleChangeName}
        />
      </label>
    </Chapter>

  </form>
)
  }
}
export default PhoneInput;