import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useCountriesOfContinent } from '../api'

export const Continent = () => {
  const { continentCode } = useParams()
  const { data, loading, error } = useCountriesOfContinent(continentCode || '')

  const countriesNodes = useMemo(() => {
    if (!data) {
      return []
    }
    if (!data.continent) {
      return []
    }

    return data.continent.countries.map(country => (
      <li key={country.code}>
        <Link
          to={`/countries/${country.code}`}
          className='box block text-center perfect-center'
        >
          <span className='block'>{country.emoji}</span>
          <span className='block'>{country.name}</span>
        </Link>
      </li>
    ))
  }, [data])

  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div className='text-center'>Error: {error.message}</div>
  }

  if (!data) {
    return (
      <div className='text-center'>Sorry, we have no data from the server</div>
    )
  }

  const { continent } = data

  if (!continent) {
    return <div className='text-center'>No such continent</div>
  }

  return (
    <main className='stack'>
      <h1 className='text-center'>{continent.name}</h1>
      <ul role='list' className='grid'>
        {countriesNodes.length === 0 ? (
          <li>No continents yet</li>
        ) : (
          countriesNodes
        )}
      </ul>
    </main>
  )
}
