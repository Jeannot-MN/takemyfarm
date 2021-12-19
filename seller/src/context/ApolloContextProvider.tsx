import * as React from 'react';
import ApolloClient, { DefaultOptions } from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import { AuthContextType } from './AuthContext';

const httpLink = createHttpLink({
    uri: 'http://localhost:8080/graphql'
})

const authLink = setContext(() => {
    
    const token : AuthContextType = JSON.parse(localStorage.getItem('auth') || '') as AuthContextType;
    
    return {
        headers: {
            Authorization: token  && token.authenticated ? `Bearer ${token.token}` : ''
        }
    }
})

const defaultOptions: DefaultOptions = {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'ignore',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  }

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    defaultOptions: defaultOptions
})

interface Props {
    children: JSX.Element
}


export default function ApolloContextProvider({ children }: Props) {

    return (
        <ApolloProvider client={client as any}>
            {children}
        </ApolloProvider>
    )
}


