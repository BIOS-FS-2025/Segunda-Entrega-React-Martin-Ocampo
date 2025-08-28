import React from 'react'
import "./CardDetail.css"
import { useParams } from 'react-router-dom'
import GetData from '../../../hooks/GetData'
import { Link } from 'react-router-dom'

const CardDetail = () => {
  const { id } = useParams()
  const { countries } = GetData()
  const country = countries.find(country => country.alpha3Code === id)

  //si no hay país encontrado o los datos no se han cargado
  if (!country) {
    return (
      <div className='card-detail'>
        <div className='card-detail-loading'>
          <p>Cargando...</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className='card-detail-back'>
        <Link to='/home'>
          <button>Back</button>
        </Link>
      </div>
      <div className='card-detail'>
        <div className='card-detail-img'>
          <img src={country.flags?.png} alt={country.name} />
        </div>
        <div className='card-detail-info'>
          <h1>{country.name}</h1>
          <div className='card-detail-info-item'>
            <div className='card-detail-info-item-left'>
              <p><strong>Población:</strong> {country.population?.toLocaleString?.() ?? country.population}</p>
              <p><strong>Nombre Nativo:</strong> {country.nativeName || country.name}</p>
              <p><strong>Región:</strong> {country.region}</p>
              <p><strong>Sub Región:</strong> {country.subregion}</p>
              <p><strong>Capital:</strong> {country.capital || '—'}</p>
            </div>
            <div className='card-detail-info-item-right'>
              <p><strong>Dominio Top Level:</strong> {country.topLevelDomain?.[0] || 'N/A'}</p>
              <p>
                <strong>Lenguajes:</strong>{' '}
                {Array.isArray(country.languages)
                  ? country.languages.map(l => l.name).filter(Boolean).join(', ')
                  : 'N/A'}
              </p>
              <p>
                <strong>Moneda:</strong>{' '}
                {Array.isArray(country.currencies)
                  ? country.currencies.map(c => c.code || c.name).filter(Boolean).join(', ')
                  : 'N/A'}
              </p>
            </div>
          </div>
          <div className='card-detail-border'>
            <p><strong>Países Limítrofes:</strong></p>
            <div className='card-detail-border-item'>
              {Array.isArray(country.borders) && country.borders.length > 0 ? (
                country.borders.map((border, index) => (
                  <p key={index}>{border}</p>
                ))
              ) : (
                <p>Sin países limítrofes</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardDetail
