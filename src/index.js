import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import { getApiBaseUrl } from './hooks'
import { App } from './App'

const urlApi = getApiBaseUrl()

const client = new ApolloClient({
  uri: `${urlApi}/graphql`,
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('app')
)
