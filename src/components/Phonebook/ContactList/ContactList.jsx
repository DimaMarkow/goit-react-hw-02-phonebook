import React from 'react';
import PropTypes from 'prop-types';

import css from 'components/Phonebook/phonebook.module.css';

class ContactList extends React.Component {
  render() {
    const contacts = this.props.contacts;

    const elements = contacts.map(({ id, name, number }) => (
      <p key={id} className={css.text}>
        {name} {number}
      </p>
    ));

    return (
      <>
        <h2 className={css.title}>Contacts</h2>
        <div className={css.buttonWrapper}>{elements}</div>
      </>
    );
  }
}

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

ContactList.defaultProps = {
  contacts: [],
};
