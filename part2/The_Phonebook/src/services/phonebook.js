import axios from "axios"
const baseurl='http://localhost:3001/persons'

const storenumber=(newobj)=>{
    const request=axios.post(baseurl,newobj)
    return request.then(response=>response.data)
}
export default{
    storenumber
}