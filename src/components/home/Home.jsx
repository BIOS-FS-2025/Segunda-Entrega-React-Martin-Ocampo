import React, { useState, useMemo } from 'react'
import "./Home.css"
import Card from '../card/Card'
import Filters from '../filters/Filters'
import GetData from '../../hooks/GetData' 

const Home = () => {
  const { countries } = GetData()                
  const [query, setQuery] = useState('')
  const [region, setRegion] = useState('Filtrar por región')    

  
  const filtered = useMemo(() => {
    const q = query.toLowerCase()
    return countries.filter(c => {
      const nameOk = (c.name || '').toLowerCase().includes(q)
      const regionOk = region === 'Filtrar por región' ? true : c.region === region
      return nameOk && regionOk
    })
  }, [countries, query, region])

  return (
    <div className='home'>
      <Filters
        query={query}
        setQuery={setQuery}
        region={region}
        setRegion={setRegion}
        countries={countries}   
      />
      <div className='cards-container'>
        <Card countriesOverride={filtered} />
      </div>
    </div>
  )
}

export default Home
