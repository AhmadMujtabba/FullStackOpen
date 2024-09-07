import { useEffect, useState } from 'react'
import axios from 'axios'
function App() {
  const [data,setData]=useState('')
  useEffect(()=>{
    axios
    .get('https://studies.cs.helsinki.fi/restcountries/api/all')
    .then(response=>console.log(response.data))
  },[])
 return(
  <div>
    <p>Hello World</p>
  </div>
 )
}

export default App
