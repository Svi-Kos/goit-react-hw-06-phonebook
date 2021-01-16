// import React, { useState } from 'react';
// import s from '../ContactForm/ContactForm.module.css';

// function ContactForm({ onSubmit }) {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');

//   const handleChange = event => {
//     const { name, value } = event.currentTarget;

//     switch (name) {
//       case 'name':
//         setName(value);

//         break;
//       case 'number':
//         setNumber(value);
//         break;

//       default:
//         return;
//     }
//   };

//   const handleSubmit = event => {
//     event.preventDefault();
//     onSubmit(name, number);
//     reset();
//   };

//   const reset = () => {
//     setName('');
//     setNumber('');
//   };

//   return (
//     <form onSubmit={handleSubmit} className={s.contactForm}>
//       <label className={s.contactFormLabel}>
//         Name
//         <input
//           type="text"
//           required
//           name="name"
//           value={name}
//           onChange={handleChange}
//         />
//       </label>
//       <label className={s.contactFormLabel}>
//         Number
//         <input
//           type="tel"
//           pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
//           required
//           name="number"
//           value={number}
//           onChange={handleChange}
//         />
//         <p className={s.numberFormat}>Format: xxx-xx-xx</p>
//       </label>
//       <button type="submit" className={s.contactFormBtn}>
//         Add contact
//       </button>
//     </form>
//   );
// }

// export default ContactForm;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'redux/actions';
import s from '../ContactForm/ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const name = this.state.name;
    const number = this.state.number;

    this.props.onSubmit(name, number);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={s.contactForm}>
        <label className={s.contactFormLabel}>
          Name
          <input
            type="text"
            required
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label className={s.contactFormLabel}>
          Number
          <input
            type="tel"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
            required
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
          />
          <p className={s.numberFormat}>Format: xxx-xx-xx</p>
        </label>
        <button type="submit" className={s.contactFormBtn}>
          Add contact
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) => dispatch(actions.addContact(name, number)),
});

export default connect(null, mapDispatchToProps)(ContactForm);
