import ggl from 'graphql-tag'
import { graphql } from 'react-apollo'

// TODO: Add graphql-tag/loader and import query.graphql
const query = ggl`
  query Country ($code:String) {
    country(code:$code) {
      name
      code
      native
      phone
      currency
      emoji
      languages {
        name
      }
      continent {
        code
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
  const { loading, error, country } = data;

  if (error) {
    return { error };
  } else if (loading) {
    return { loading: true };
  }

  return {
    country: {
      ...country,
      languages: country.languages.map(lang => lang.name),
    },
  };
};

const withCountry = graphql(query, {
  options: mapPropsToOptions,
  props: mapDataToProps,
});

export default withCountry;
