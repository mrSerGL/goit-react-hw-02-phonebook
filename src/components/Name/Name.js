import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Chapter from 'components/Chapter';
import css from './Name.module.css';

class Name extends Component {
  state = {
    id: '',
    name: '',
  };


  nameInputId = nanoid();
  nameId = nanoid();

  handleChangeName = event => {
    this.setState({
      id: this.nameId,
      name: event.currentTarget.value,
    });

    console.log(this.state.id, this.state.name);
  };

  handleSubmit=event=>{
    event.preventDefault();
    this.props.onSubmit(this.state);

    this.setState({
      id: '',
      name: '',
    });

  }
  
  // =============== render area ======================
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
        <button type="submit" className={css.button} >
            Add contact
        </button>
      </form>
    );
  }
}
export default Name;
