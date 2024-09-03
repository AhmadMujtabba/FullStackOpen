import axios from "axios"
const baseurl='http://localhost:3001/persons'

const createentry=(newobj)=>{
    const request=axios.post(baseurl,newobj)
    return request.then(response=>response.data)
}

const getdata=()=>{
    const request=axios.get(baseurl)
    return request.then((response=>response.data))
}

export default{
    createentry,getdata
}