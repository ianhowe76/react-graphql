import { graphql } from 'react-apollo';
import query from './query.graphql';

const mapDataToProps = ({ data }) => {
  const { loading, error, continents } = data;

  if (error) {
    return { error };
  } else if (loading) {
    return { loading: true };
  }

  return {
    continents: [...continents],
  };
};

const withContinentList = graphql(query, {
  props: mapDataToProps,
});

export default withContinentList;
