import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CountryInfo from '../components/country-info';
import withCountry from '../containers/with-country';

const CountryPage = ({ loading, error, country }) => {
  let content = null;

  if (error) {
    content = <p>Error fetching country data...</p>;
  } else if (loading) {
    content = <p>Loading...</p>;
  } else {
    content = (
      <Fragment>
        <CountryInfo {...country} />
        <Link to={`/continent/${country.continent.code}`}>Back to continent</Link>
      </Fragment>
    );
  }

  return (
    <div>
      <div>Country Page</div>
      {content}
    </div>
  );
};

CountryPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.object,
  country: PropTypes.object,
};

export default withCountry(CountryPage);
