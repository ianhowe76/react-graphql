import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import withContinentList from '../containers/with-continent-list';
import PageContainer from '../components/page-container/page-container';

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
    <PageContainer>
      <h1>The Continents</h1>
      {content}
    </PageContainer>
  );
};

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.object,
  continents: PropTypes.arrayOf(PropTypes.object),
};

export default withContinentList(HomePage);
