import PropTypes from 'prop-types';
import React from 'react';
import { FindText, FindValue } from './ContactFilter.styled';

export function ContactFilter({ value, onChange }) {
  return (
    <FindText>
      Find contacts by name
      <FindValue type="text" value={value} onChange={onChange}></FindValue>
    </FindText>
  );
}

ContactFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
