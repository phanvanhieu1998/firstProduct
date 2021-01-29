
import axios from 'axios';
// axios.defaults.baseURL = 'https://api.meiboutiques.work/';

const share= axios.create({
    baseURL:'https://api.meiboutiques.work/', // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
  
  }) 


  share.interceptors.request.use(
    config => {
     
  
      if (store.getters.getToken) {
   
        config.headers['Authorization'] = `Bearer ${store.getters.getToken}`
      }
      return config
    },
    error => {
      // do something with request error
      console.log(error) // for debug
      return Promise.reject(error)
    }
  )
export default share;
