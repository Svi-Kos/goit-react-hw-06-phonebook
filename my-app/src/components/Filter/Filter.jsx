import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from 'redux/actions';
import s from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <label className={s.filter}>
    Find contacts by name{' '}
    <input type="text" value={value} onChange={onChange} />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string,
};

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(actions.changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
