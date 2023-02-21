import React from 'react'
import ReactDOM from 'react-dom'
import { setContext } from '@apollo/client/link/context'
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { getApiBaseUrl } from './hooks'
import Context from './Context'
import { App } from './App'

const urlApi = getApiBaseUrl()

const httpLink = createHttpLink({
  uri: `${urlApi}/graphql`
})

const authLink = setContext((_, { headers }) => {
  const token = window.sessionStorage.getItem('token')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

ReactDOM.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById('app')
)
