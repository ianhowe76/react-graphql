// This is an example of creating a HOC using the apollo <Query /> component
import React, { Component } from 'react';
import ggl from 'graphql-tag';
import { Query } from 'react-apollo';

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

const buildCountryFromData = data => data && data.country ? ({
  ...data.country,
  languages: data.country.languages.map(lang => lang.name),
}) : null;

const withCountry = WrappedComponent => {
  class WithCountry extends Component {
    render() {
      const variables = {
        code: this.props.match.params.code,
      };

      return (
        <Query query={query} variables={variables}>
          {
            ({ loading, error, data }) => {
              return (
                <WrappedComponent
                  loading={loading}
                  error={error}
                  country={buildCountryFromData(data)}
                />
              );
            }
          }
        </Query>
      )
    }
  }

  return WithCountry;
};

export default withCountry;
