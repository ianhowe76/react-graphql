import React from 'react';
import PropTypes from 'prop-types';

const CountryInfo = ({
  name,
  phone,
  currency,
  emoji,
  languages,
}) => (
  <div>
    <p>
      <span>Name:</span><span>{name}</span>
    </p>
    <p>
      <span>Phone:</span><span>{phone}</span>
    </p>
    <p>
      <span>Currency:</span>
      <span>{currency}</span>
    </p>
    <p>
      <span>Languages:</span><span>{languages.join(', ')}</span>
    </p>
  </div>
);

CountryInfo.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired,
  languages: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CountryInfo;
