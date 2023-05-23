import { gql } from '@apollo/client'
import { useQuery } from '@apollo/client/react'
import {
  AllContinentsQuery,
  ContinentQuery,
  ContinentQueryVariables,
  CountryQuery,
  CountryQueryVariables
} from '../gql/graphql'

const ALL_CONTINENTS = gql`
  query allContinents {
    continents {
      code
      name
    }
  }
`

const CONTINENT = gql`
  query Continent($code: ID!) {
    continent(code: $code) {
      name
      countries {
        code
        name
        emoji
      }
    }
  }
`

const COUNTRY = gql`
  query Country($code: ID!) {
    country(code: $code) {
      name
      capital
      emoji
      currency
    }
  }
`

export const useAllContinentsQuery = () => {
  return useQuery<AllContinentsQuery>(ALL_CONTINENTS)
}

export const useCountriesOfContinent = (
  code: ContinentQueryVariables['code']
) => {
  return useQuery<ContinentQuery>(CONTINENT, { variables: { code } })
}

export const useCountry = (code: CountryQueryVariables['code']) => {
  return useQuery<CountryQuery>(COUNTRY, { variables: { code } })
}
