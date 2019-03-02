import ggl from 'graphql-tag'
import { graphql } from 'react-apollo'

// TODO: Add graphql-tag/loader and import query.graphql
const query = ggl`
  query Continents {
    continents {
      name
      code
    }
  }
`

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
