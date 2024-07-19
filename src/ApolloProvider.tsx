'use client';
import { HttpLink } from '@apollo/client';
import { ApolloClient, ApolloNextAppProvider, InMemoryCache } from '@apollo/experimental-nextjs-app-support';
import React from 'react';

function makeClient() {
  const httpLink = new HttpLink({
    uri: 'https://spacex-production.up.railway.app/'
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    ssrMode: true,
    link: httpLink
  });
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
