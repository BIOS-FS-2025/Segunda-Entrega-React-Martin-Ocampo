import React from 'react'
import './Card.css'
import GetData from '../../hooks/GetData'
import { Link } from 'react-router-dom'

const Card = ({ countriesOverride }) => {
  const { countries } = GetData()
  const list = countriesOverride || countries

  return (
    <>
      {list.map((country) => (
        <div className='card' key={country.alpha3Code}>
          <Link to={`/card-detail/${country.alpha3Code}`}>
            <img src={country.flags.png} alt={country.name}/>
          </Link>
          <h3>{country.name}</h3>
          <p><strong>Población:</strong> {country.population}</p>
          <p><strong>Región:</strong> {country.region}</p>
          <p><strong>Capital:</strong> {country.capital}</p>
        </div>
      ))}
    </>
  )
}

export default Card
