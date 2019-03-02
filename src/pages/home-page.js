import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import withMain from '../containers/with-main';

const HomePage = ({ loading, error, continents }) => {
  let content = null;

  if (error) {
    content = <p>Error fetching continent data...</p>
  } else if (loading) {
    content = <p>Loading...</p>
  } else {
    content = (
      <ul>
        {
          continents.map(continent => (
            <li key={continent.code}>
              <Link to={`/continent/${continent.code}`}>
                {continent.name}
              </Link>
            </li>
          ))
        }
      </ul>
    )
  }

  return (
    <div>
      <div>Home Page</div>
      {content}
    </div>
  );
};

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.object,
  continents: PropTypes.arrayOf(PropTypes.object),
};

export default withMain(HomePage);
