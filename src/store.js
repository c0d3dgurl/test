import Vue from 'vue'
import Vuex from 'vuex' 
// import { getAPI } from './axios-api'
// import axios from 'axios'


Vue.use(Vuex)
export default new Vuex.Store({
    namespaced: true,
    state: {
        accessToken: null,
        refreshToken: null,
        APIData: '',
        user:null
    },
    mutations: {
        updateStorage (state, { access, refresh}){
          localStorage.setItem('refresh_key',refresh)
          localStorage.setItem('access_key',access)
            state.accessToken = access
            state.refreshToken = refresh
        },
        destroyToken (state) {
          state.accessToken = null
          state.refreshToken = null
          //destroy token
        },
        updateUser(state,user){
          state.user=user
        }
      },
      getters: {
        loggedIn (state) {
          return state.accessToken != null
        },
         
        getUser(state){
          return state.user
        }
      },
    actions: {
        userLogout (context) {
          if (context.getters.loggedIn) {
              context.commit('destroyToken')
              console.log ('email')
              localStorage.removeItem("email");
          }
        },
        async userLogin ({commit}, usercredentials) {

            const res = await fetch('http://localhost:8000/token/',{
              method:"POST",
              headers:{
                'Content-Type':"application/json"
              },
              body:JSON.stringify({
                email:usercredentials.email,
                password:usercredentials.password
              })
            })
            const data= await res.json()
            // 

            if (res.ok) {
              const {access,refresh} =data

              localStorage.setItem('access',access)
              localStorage.setItem('refresh',refresh)

              //console.log(1)


              const userRes=await fetch('http://localhost:8000/me/',{
                headers:{
                  'Content-type':'application/json',
                  "Authorization":`Bearer ${access}`
                }
              })
              //console.log(1)
            if(userRes.ok){
              //console.log('here')
              const user= await userRes.json()

              console.log(user.email)

              return commit('updateUser',user)
            }else{
              return commit('updateUser',null)
            }
              
            }else{
              return    commit('updateUser',null)
              
            }

            

            
        },
        // inspectToken(){
        //   <script src="js/jwt-decode.min.js"></script>
        //   const token = this.state.jwt;
        //   if(token){
        //     const decoded = jwt_decode(token);
        //     const exp = decoded.exp
        //     const orig_iat = decode.orig_iat        
        //     if(exp - (Date.now()/1000) < 1800 && (Date.now()/1000) - orig_iat < 628200){
        //       this.dispatch('refreshToken')
        //     } else if (exp -(Date.now()/1000) < 1800){
        //       // DO NOTHING, DO NOT REFRESH          
        //     } else {
        //       // PROMPT USER TO RE-LOGIN, THIS ELSE CLAUSE COVERS THE CONDITION WHERE A TOKEN IS EXPIRED AS WELL
        //     }
        //   }
        // }
    }

})