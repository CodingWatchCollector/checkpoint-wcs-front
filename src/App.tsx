import { Outlet } from 'react-router-dom'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const serverUrl = 'https://countries.nausicaa.wilders.dev'

const client = new ApolloClient({
  uri: serverUrl,
  cache: new InMemoryCache()
})

export const App = () => {
  return (
    <div className='container'>
      <ApolloProvider client={client}>
        <Outlet />
      </ApolloProvider>
    </div>
  )
}
