import axios from 'axios'

const getall=()=>{
    
    const request=axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
    return request.then(response=>(response.data))   
}
const getspecificcountary=(name)=>{
    const request=axios.get(`https://studies.cs.helsinki.fi/restcountries/api/name/${name}`)
    return request.then(response=>response.data)
}   
export default
{
    getall,getspecificcountary
}