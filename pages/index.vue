<template>
  <div class="container">
      <client-only>
        <Login/>
      </client-only>
   
  </div>
</template>

<script>
import { mapState,mapActions } from 'vuex'
import Login from './admin/login.vue'
export default {
 
  components:{
    Login
  }
  
}
</script>

<style


</style>
