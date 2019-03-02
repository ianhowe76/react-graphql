import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CountryInfo from '../components/country-info';
import withCountry from '../containers/with-country';
import PageContainer from '../components/page-container/page-container';

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
    <PageContainer>
      <h1>Country Page</h1>
      {content}
    </PageContainer>
  );
};

CountryPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.object,
  country: PropTypes.object,
};

export default withCountry(CountryPage);
