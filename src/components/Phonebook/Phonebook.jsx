import React from 'react';
import css from './phonebook.module.css';

const INITIAL_STATE = {
  contacts: [],
  name: '',
  number: '',
};

class Phonebook extends React.Component {
  state = { ...INITIAL_STATE };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handleNumberChange = e => {
    this.setState({ number: e.target.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const contactName = form.elements.name.value;
    console.log(contactName);
    // this.props.onSubmit({ login, password });
    form.reset();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleNameChange}
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleNumberChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default Phonebook;
