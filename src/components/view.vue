<template>
<div>
 <div>
  <nav class="navbar navbar-expand-lg navbar-light navbar_light" >
    <div class="container">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <!-- <img src="../assets/coa.png" alt="coa"  width="30" height="24"> -->
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          <!-- <ul class="navbar-nav mr-auto navbar_nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home</a>
            <a class="nav-link" href="#">Welcome Gee</a>
          </li>
        </ul>     -->
        </form>
        <ul class="navbar-nav mr-auto navbar_auto">
          <li class="nav-item active">
            <!-- <a class="nav-link" href="#">Home</a> -->
          </li>
        </ul>    
        <form class="form-inline my-2 my-lg-0">
          <!-- <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> -->
          <ul class="navbar-nav mr-auto navbar_nav">
          <li class="nav-item active">
            <!-- <a class="nav-link" href="#">Home</a> -->
            <a class="nav-link" href="#">Welcome {{email}}</a>
          </li>
          <li class="nav-item active"> 
          <button type="button" class="btn btn-danger" v-on:click="logout">Logout</button> 
          </li>
        </ul>    
        </form>
      </div>
    </div>
    </div>
  </nav>
  </div>

  <!-- <div>
     <aside class="sidebar">
       <img class="top_logo" src="../assets/coa.png" width="34" height="28">
       <ul class="sidebar_icon">
        <li><em class="fa fa-home"></em></li>
        <li><em class="fa fa-folder"></em></li>
        <li><em class="fa fa-folder"></em></li>
        <li><em class="fa fa-folder"></em></li>
        </ul> 
     </aside>
  </div> -->
  <div>

  <div class="graph_area">
      <div class="container">
          <div class="row">
              <div class="col-lg-3">
                  <div>
                      <button type="button" class="btn btn-primary">Upload</button>
                  </div>
              </div>

              <div class="col-lg-3">
                  <button type="button" class="btn btn-primary">Download</button>
              </div>

              <div class="col-lg-3">
                 <button type="button" class="btn btn-primary">Print</button>
              </div>     
          </div>
      </div>
</div>


  <div class="copyright_txt">
    <p>THE CANDIDATURES BUREAU | IT UNIT-2021</p>
  </div>
  </div>
 
</div>
</template>



<script>
// import Vue from 'vue';
// import store from './store'
import { getAPI } from '../axios-api'
import { mapState,mapGetters } from 'vuex'


  export default {
    name: 'view',

    onIdle () {
      this.$store.dispatch('userLogout')
        .then(() => {
          this.$router.push({ name: 'login' })
        })
    },
    data(){
      return{
        email:''
      }
    },
    mounted(){
      // if(localStorage.email)this.email=localStorage.email;
      // console.log(this.$store)
      if (localStorage.getItem('email')){
        this.email = localStorage.getItem('email');
      }

    },
    computed: {
      ...mapState(['APIData']),
      ...mapGetters(['getUser'])
      },
    created () {
        getAPI.get('/api/folders/', { headers: { Authorization: `Bearer ${this.$store.state.accessToken}` } })
          .then(response => {
            this.$store.state.APIData = response.data
          })
          .catch(err => {
            console.log(err)
          })
    },
    methods:{

    logout() {      
      this.$store.dispatch('userLogout')
        .then(() => {
          window.location.replace("http://127.0.0.1:8080/")              
          })    

    },
    }
  }
// import Vue from 'vue';
// // import axios from 'axios';
// import VueAxios from 'vue-axios';
// import { getAPI } from '../axios-api'
// import { mapState,mapGetters } from 'vuex'

// Vue.use(VueAxios.axios)

// export default {
//   name: "view",
//   // mounted()
//   // {
//   //   Vue.axios.get('http://127.0.0.1:8000/api/folders')
//   //   .then ((response)=>{
//   //     console.warn(response)
//   //   })
//   // }
//     onIdle () {
//       this.$store.dispatch('userLogout')
//         .then(() => {
//           this.$router.push({ name: 'login' })
//         })
//     },
//     data(){
//       return{
//         email:''
//       }
//     },
//     mounted(){
//       if(localStorage.email)this.email=localStorage.email;
//       console.log(this.$store)
//     },
//     computed: {
//       ...mapState(['accessToken']),
//       ...mapGetters(['getUser'])
//       },
//     created () {
//         getAPI.get('/api/bureaus/', { headers: { Authorization: `Bearer ${this.$store.state.accessToken}` } })
//           .then(response => {
//             this.$store.state.APIData = response.data
//           })
//           .catch(err => {
//             console.log(err)
//           })
//     },
//     methods:{

//     logout() {      
//       this.$store.dispatch('userLogout')
//         .then(() => {
//           window.location.replace("http://127.0.0.1:8080/")              })    

//     },
//     }
//   }
</script>

<style scoped>
.navbar_light .navbar_auto li a.nav-link
{
  color: #1a1a1a;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  padding: 0.5rem 0.8rem;

}
.navbar_nav .nav-item a.nav-link{
  color: #142535;
  font-size: 14px;
  font-weight: 500;
  padding: 0.5rem 1rem;
}
.navbar_nav .nav-item a.nav_btn{
  border: 2px solid #142535;
  border-radius: 4px;

}
.navbar_light{
  box-shadow: 0 8px 17px 2px rgb(193 193 193 / 14%), 0 3px 14px 2px rgb(185 185 185 / 12%), 0 5px 5px -3px rgb(171 171 171 / 20%);
    background: #fff;
}

aside.sidebar{
  position: fixed;
  width: 75px;
  background: #fff;
  left: 0;
  top: 0;
  height: 100vh;
  box-shadow: 0 8px 17px 2px rgb(193 193 193 / 14%), 0 3px 14px 2px rgb(185 185 185 / 12%), 0 5px 5px -3px rgb(171 171 171 / 20%);
  text-align: center;
  padding: 0.5 rem 0;

}
.sidebar_img{
  padding: 0;
  margin: 0;
  list-style: none;
}
.top_logo{
  margin-top: 15px;

}
.row{
    margin-top: 500px;
    
}
.sidebar_img li{
  margin: 1rem 0;
  padding: 0.5rem 0;
}
.sidebar_img li em.fa{
  font-size: 24px;
}
.fa:before{
  color: inherit !important;
}
.sidebar_icon{
  padding: 0;
  margin: 0;
  list-style: none;
  margin-top: 6rem;
}

.sidebar_icon li{
  margin: 1rem 0;
  padding: 0.5rem 0;
  border-left: 2px solid #fff;
}
.sidebar_icon li:hover
{
  border-color: #044d91;
  color: #044d91;
}

.sidebar_icon li em.fa{
  color: #a09e9e;
  font-size: 24px;

}
.sidebar_icon li em.fa:hover{
  color:#044d91 ;
}

.graph_area{
  padding: 30px 15px 30px 30px;
}
.user_name h2{
  font-weight: 400;
  color: #1a1a1a;
}

.value_cards_sec{
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.button p{
  color: #fff  !important;
  font-size: 14px;
}
.graph_sec{
  margin-bottom: 2rem;
}
.graph_sec_2{
  box-shadow: 0px 16px 20px #fde7dda4;
  padding: 1.2rem;
  border-radius: 12px;
  background: #fff;

}
.graph_sec_2 p{
  color: #2B2B2B;
  font-size: 14px;
  margin-bottom: 0.5rem;
}
.graph_sec_2 img.user{
  width: 40%;
  align-content: center;
}

.copyright_txt{
  text-align: center;
  margin-bottom: 2rem;
}
.copyright_txt p{
  color: #2B2B2B;
  font-size: 14px;
  font-weight: 500;
  margin: 0;
}
</style>
  
