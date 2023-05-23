import { useParams } from 'react-router-dom'
import { useCountry } from '../api'

export const Country = () => {
  const { countryCode } = useParams()
  const { data, loading, error } = useCountry(countryCode || '')

  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error: {error.message}</div>
  }

  if (!data) {
    return <div>Sorry, we have no data from the server</div>
  }

  const { country } = data

  if (!country) {
    return <div>No such country</div>
  }

  return (
    <main className='stack'>
      <h1 className='text-center'>{country.name}</h1>
      <div className='icon--big text-center'>{country.emoji}</div>
      <p className='two-cols center'>
        <span>Currency:</span> <span>{country.currency || 'Unknown'}</span>
        <span>Capital:</span> <span>{country.capital || 'Unknown'}</span>
      </p>
    </main>
  )
}
