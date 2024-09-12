import { useEffect, useState } from 'react'
import dataextractor from './services/dataforcountries'

const List = ({ countriestoshow, update, countrydata,search }) => {

  const arraylength = countriestoshow.length
  if (arraylength > 10 && search!=='') {
    return (<p>Too many matches specify another filter</p>)
  }
  else if (arraylength <= 10 && arraylength > 1) {
    return (
      <ul>
        {countriestoshow.map(coun => <li key={coun}>{coun}</li>)}
      </ul>
    )
  }
  else if (countriestoshow.length == 1) {
    const country = countriestoshow.toString()
    dataextractor
      .getspecificcountary(country)
      .then(res => {
        update(res)
      })
      .catch()
      {
        window.alert('Error')
      }
    if (countrydata !== null) {
      const language = Object.values(countrydata.languages)
      return (
        <div>
          <h2>{countrydata.name.official}</h2>
          <p><b>Capital </b>{countrydata.capital}</p>
          <p><b>Area </b>{countrydata.area}</p>
          <h3>Languages:</h3>
          <ul>
            {language.map(lang => <li key={lang}>{lang}</li>)}
          </ul>
          <img src={countrydata.flags.png} alt={countrydata.flags.alt} />
        </div>
      )
    }
  }
}

function App() {
  const [search, setSearch] = useState('')
  const [countrydata, setCountrydata] = useState(null)
  const [countries, setCountries] = useState([])
  const [countriestoshow, setCountriestoshow] = useState([])

  useEffect(() => {
    dataextractor
      .getall()
      .then(response => {
        const countname = response.map(res => res.name.common)
        setCountries(countname)
      })
  }, [])

  const handlesearch = (event) => {
    const searched = event.target.value
    setSearch(event.target.value)
    const filtereddata = countries.filter(data => data.toLowerCase().includes(searched.toLowerCase()))
    setCountriestoshow(filtereddata)
  }

  const updatecountrydatastate = (res) => {
    setCountrydata(res)
  }

  return (
    <div>
      <form>
        Search <input type='text' onChange={handlesearch} />
        <List countriestoshow={countriestoshow} 
              update={updatecountrydatastate} 
              countrydata={countrydata}  
              search={search}/>
      </form>
    </div>
  )
}
export default App
