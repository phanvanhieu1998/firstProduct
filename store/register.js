import axios from 'axios'
// import share from '~/share'
export const state = () => ({
    // token: localStorage.getItem('token')
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
        commit
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

  
}

export const mutations ={

}


