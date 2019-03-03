// This is an example of creating a HOC using the apollo graphql function
import ggl from 'graphql-tag'
import { graphql } from 'react-apollo'

// TODO: Add graphql-tag/loader and import query.graphql
const query = ggl`
  query Continent ($code:String) {
    continent(code:$code) {
      name
      code
      countries {
        code
        name
      }
    }
  }
`

const mapPropsToOptions = ({ match }) => ({
  variables: {
    code: match.params.code,
  },
});

const mapDataToProps = ({ data }) => {
  const { loading, error, continent } = data;

  if (error) {
    return { error };
  } else if (loading) {
    return { loading: true };
  }

  return {
    continent: {...continent},
  };
};

const withContinent = graphql(query, {
  options: mapPropsToOptions,
  props: mapDataToProps,
});

export default withContinent;
