import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useAllContinentsQuery } from '../api'

export const AllContinents = () => {
  const { data, loading, error } = useAllContinentsQuery()

  const continentsNodes = useMemo(() => {
    if (!data) {
      return []
    }
    return data.continents.map(cont => (
      <li key={cont.code}>
        <Link
          to={`/continents/${cont.code}`}
          className='box text-center perfect-center continent-card'
        >
          {cont.name}
        </Link>
      </li>
    ))
  }, [data])

  if (loading) {
    return <div className='text-center'>Loading...</div>
  }
  if (error) {
    return <div className='text-center'>Error: {error.message}</div>
  }

  return (
    <main className='stack'>
      <h1 className='text-center'>Continents</h1>
      <ul role='list' className='grid'>
        {continentsNodes.length === 0 ? (
          <li className='text-center'>No continents yet</li>
        ) : (
          continentsNodes
        )}
      </ul>
    </main>
  )
}
