import * as React from 'react';
import ApolloClient from 'apollo-client';
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
    console.log(token);
    
    return {
        headers: {
            Authorization: token  && token.authenticated ? `Bearer ${token.token}` : ''
        }
    }
})

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
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


