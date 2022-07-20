import axios from 'axios'
const axiosConfig = {
    baseURL: 'https://verificate-skill.herokuapp.com/',
    timeout: 30000,
    headers:{
        "authorization":`${localStorage.getItem("token")}`
    }
  };
  
const  Axios = axios.create(axiosConfig)
export default Axios