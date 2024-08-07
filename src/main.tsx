import './index.css';
import ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider, split, HttpLink } from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import App from './App';

const httpLink = new HttpLink({
  uri: 'http://localhost:8080/query',
});

const wsLink = new WebSocketLink({
  uri: `ws://localhost:8080/query`,
  options: {
    reconnect: true,
    connectionParams: {
      // You can add headers or other params here if needed
    },
  }
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement!);

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);