import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import { getApiBaseUrl } from './hooks'
import Context from './Context'
import { App } from './App'

const urlApi = getApiBaseUrl()

const client = new ApolloClient({
  uri: `${urlApi}/graphql`,
  cache: new InMemoryCache()
})

ReactDOM.render(
  <Context.Provider value={{ isAuth: false }}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById('app')
)
