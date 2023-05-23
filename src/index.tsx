import React from 'react'
import ReactDOM from 'react-dom/client'
import './globals.css'
import { App } from './App'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import { AllContinents, Continent, Country } from './routes'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<AllContinents />} />
      <Route path='continents/:continentCode' element={<Continent />} />
      <Route path='countries/:countryCode' element={<Country />} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>
)
