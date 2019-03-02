import ApolloClient from 'apollo-boost';

const graphqlApi = 'https://countries.trevorblades.com/';

const client = new ApolloClient({
  uri: graphqlApi,
});

export default client;
