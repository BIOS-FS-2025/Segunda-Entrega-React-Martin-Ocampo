import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const GetData = () => {
    const [countries, setCountries] = useState([])

    const getCountries = async () => {
        const response = await axios.get('/api-countries/countries')
        setCountries(response.data)
    } //función que obtiene los países y almacena la respuesta de la API en el estado de countries

    useEffect(() => {
        getCountries()
    }, []) //se ejecuta la función cuando el componente se monta por primera vez

    return { countries } //se retorna el estado de countries para que pueda ser utilizado en el componente y se pueda acceder a los datos de la respuesta.
}

export default GetData