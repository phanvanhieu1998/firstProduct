import axios from 'axios'
import { Store } from 'vuex'
// import share from '~/share'
export const state = () => ({
    // token: localStorage.getItem('token')
    authenticated:true,
 
})

export const getters = {
    // getToken: state => state.token
}

export const actions = {
  register({commit},data){
    return new Promise((resolve, reject) =>{
       axios.post('https://api.meiboutiques.work/v1/admin/register',data)
    // share({
    //     url:'v1/admin/register',
    //     method:'POST',
    //     data

    // })
      .then((response) =>{
        console.log(response)
        resolve(response.data.message)
     
      })
      .catch((err) =>{
        reject(err)
      })
      
    })
  
  },
  login({commit},data){
    return new Promise((resolve, reject) =>{
      axios.post('https://api.meiboutiques.work/v1/admin/login',data)
      .then((response) =>{
        const token =response.data.data.token
        localStorage.setItem('token',token )
        console.log(response)
        resolve(response.data.message)
       
        
      })
      .catch((err) =>{
        reject(err)
      })
      
    })
  
  },
  logout({commit}){
    return new Promise((resolve, reject) =>{
      axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem("token");
      axios.post('https://api.meiboutiques.work/v1/admin/logout')
      .then((res) =>{
      
        resolve(res.data.message)
        localStorage.removeItem('token')
        commit('LOGOUT')
      })
      .catch((err) =>{
        reject(err)
      })
    })
  }

  
}

export const mutations ={
  LOGOUT:state => state.authenticated === false
}


