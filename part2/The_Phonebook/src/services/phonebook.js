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

const deleteentry=(id)=>{
    const request=axios.delete(`${baseurl}/${id}`)
    return request.then(response=>response.data)
}

const updateentry=(id,changedentry)=>{
    const request=axios.put(`${baseurl}/${id}`,changedentry)
    return request.then(response=>response.data)
}

export default{
    createentry,getdata,deleteentry,updateentry
}