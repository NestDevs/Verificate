import Axios from '../axios'


export const signUp = async (request={})=>{
    try{
  
    const response  =   await Axios.post("users/register",request)
    console.log(response)
    if(response.data.error){
return {
    status: false,
    error: response.data.error
}
    }
    return {...response.data, status:true }
    }
    catch(error){
        return {
            status: false,
            message: "please fill in all required field"
        }

    }

}


export const signIn = async (request={})=>{
    try{
  
    const response  =   await Axios.post("users/login",request)
    console.log(response)
    if(response.data.error){
return {
    status: false,
    error: response.data.error
}
    }
    return {...response.data, status:true }
    }
    catch(error){
        return {
            status: false,
            message: "please fill in all required field"
        }

    }

}


export const getProfile = async ()=>{
    try{
  
    const response  =   await Axios.get("users/profile")
    if(response.data.error){
return {
    status: false,
    error: response.data.error
}
    }
    return {...response.data, status:true }
    }
    catch(error){
        console.log(error)
        return {
            status: false,
            message: "please fill in all required field"
        }

    }

}
