import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import withContinent from '../containers/with-continent';

const ContinentPage = ({ loading, error, continent }) => {
  let content = null;

  if (error) {
    content = <p>Error fetching continent data...</p>;
  } else if (loading) {
    content = <p>Loading...</p>;
  } else {
    content = (
      <Fragment>
        <p>{continent.name}</p>
        <ul>
          {
            continent.countries.map(country => (
              <li key={country.code}>
                <Link to={`/country/${country.code}`}>{country.name}</Link>
              </li>
            ))
          }
        </ul>
      </Fragment>
    );
  }

  return (
    <div>
      <div>Continent Page</div>
      {content}
    </div>
  );
};

ContinentPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.object,
  continent: PropTypes.object,
};

export default withContinent(ContinentPage);
