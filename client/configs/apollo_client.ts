import fetch from 'node-fetch';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  fetch
});

export default client;