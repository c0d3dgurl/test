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
        </form>
        <ul class="navbar-nav mr-auto navbar_auto">
          <li class="nav-item active">
            <!-- <a class="nav-link" href="#">Home</a> -->
          </li>
        </ul>    
        <form class="form-inline my-2 my-lg-0">
          <ul class="navbar-nav mr-auto navbar_nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">Welcome {{getUser.email }}</a>
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

  <div>
     <aside class="sidebar">
       <img class="top_logo" src="../assets/coa.png" width="34" height="28">
       <ul class="sidebar_icon">
        <li><em class="fa fa-home"></em></li>
        <!-- <li><em class="fa fa-folder"></em></li> -->
        <li><a href = "http://127.0.0.1:8080/view/" ><em class="fa fa-folder"></em></a></li>
        <!-- <li><em class="fa fa-folder"></em></li> -->
        </ul> 
     </aside>
  </div>
  <div>
  <div class="graph_area">
  <div class="container">
    <div class="row">
      <div class="col-lg-4">
        <div class="user_name">
          <h2><strong>Dashboard</strong></h2>
        </div>
      </div>
      <!-- <div class="col-lg-3 offset-lg-5">
        <div class="add_link">
          <button class="btn btn-secondary btn-block"> mfa.gov.gh </button>
        </div>
      </div> -->
    </div>
    <div class="value_cards_sec">
      <div class="row">
      <div class="col-lg-3">
        <div class="value_card card_1">
          <p>Total Uploads</p>
          <h3>45</h3>
        </div>
      </div>

      <div class="col-lg-3">
        <div class="value_card card_2">
          <p>Total Downloads</p>
          <h3>245</h3>
        </div>
      </div>

       <div class="col-lg-3">
        <div class="value_card card_3">
          <p>Files Available</p>
          <h3>345</h3>
        </div>
      </div>

       <div class="col-lg-3">
        <div class="value_card card_4">
          <p>Last Login</p>
          <h3>16:30:00</h3>
        </div>
       </div>
      </div>
    </div>
    <div class="graph_sec">
      <div class="row">
        <div class="col-lg-3">
          <div>
            <!-- <p>Memory Available</p> -->
          </div>
        </div>
        <div class="col-lg-6">
          <!-- <div class="graph_sec_2">
            <p>Files Available</p>
            <img class="user" src="../assets/percent.png" alt="user" width="40%">
          </div>        -->
        </div>
        <div class="col-lg-12">
          <!-- <div class="graph_sec_2">
            <p>The Candidatures Unit|MFA</p>
          </div>        -->
        </div>
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
  import { getAPI } from '../axios-api'
  import { mapState,mapGetters } from 'vuex'

  
  export default {
    name: 'Navbar',
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
      if(localStorage.email)this.email=localStorage.email;
      console.log(this.$store)
    },
    computed: {
      ...mapState(['accessToken']),
      ...mapGetters(['getUser'])
      },
    created () {
        getAPI.get('/api/bureaus/', { headers: { Authorization: `Bearer ${this.$store.state.accessToken}` } })
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
          window.location.replace("http://127.0.0.1:8080/")              })    
    },
    }
  }
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
  padding: 1rem 0;
}
.btn-secondary{
  background-color: #666666 !important;
  text-transform: lowercase;
  border-radius: 8px !important;
  height: 50px;
  box-shadow: 0 8px 17px 2px rgb(193 193 193 / 14%), 0 3px 14px 2px rgb(123 123 123 / 12%), 0 5px 5px -3px rgb(109 109 109 / 20%);
}
.value_card{
 border-radius: 12px;
  color: #fff;
  background-color: #ddd;
  height: 110px;
 box-shadow: 0px 16px 20px #FFCEB9;
  padding: 1.2rem;
}
.value_cards_sec{
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 3rem 0;
}
.value_card p{
  color: #fff  !important;
  font-size: 14px;
}
.value_card h3{
  color: #fff !important;
  font-weight: 700;
}
.card_1{
  background: transparent linear-gradient(109deg, #55ECB2 0%,#2DD393 100%)0% 0% no-repeat padding-box;
  opacity: 1;
}
.card_2{
  background: transparent linear-gradient(112deg, #FE7379 0%,#F54EA1 100%)0% 0% no-repeat padding-box;
}
.card_3{
  background: transparent linear-gradient(112deg, #B050D1 0%,#2B26A7 100%)0% 0% no-repeat padding-box;
}
.card_4{
  background: transparent linear-gradient(112deg, #19E7DA 0%,#6070EA 100%)0% 0% no-repeat padding-box;
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
  padding: 0.5rem 0;
  margin: 12rem 0;
}
.copyright_txt p{
  color: #2B2B2B;
  font-size: 14px;
  font-weight: 500;
  margin: 0;
}
</style>
  