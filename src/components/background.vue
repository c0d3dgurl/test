<template>
   <div class="auth-wrapper">
      <div class = "auth-inner">
        <div class="split left">
          <div class="centered">
        <div class="split right">
          <div class="centered"> 

            <login/>
            

          </div>
          </div>    
          </div>
        </div>


      </div>
      <div class="logo-style">
        <img src="../assets/coa.png" alt="" width="40%">
      </div>
    </div>
</template>

<script>
import login from './login.vue'
export default {
    components :{
        login
      
    }
}
</script>

<style scoped>
.logo-style{
  position: absolute;
  top: 20px;
  left: 30px;
}

.centered{
    margin: auto;
    padding: 20px;
    display: block;
    width: 75%;
    margin-top: 100px;
   
}

body {
  background: #1C8EF9; 
  min-height: 100vh;
  display: flex;
  font-weight: 400;
  font-family: 'Fira Sans', sans-serif;

}

h1, h2, h3, h4, h5, h6, label, span {
  font-weight: 300;
  font-family: 'Fira Sans', sans-serif;
}

body, html, #root {
  width: 100%;
  height: 100%;
}

.split{
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  overflow: hidden;
  padding-top: 20px;
}

.left{
  left: 0;
  background-color: #39a3dd;
  background-image: url("../assets/login1.png");
  width: 60%;
}
.right {
  right: 0;
  background-color: #ffffff;
  width: 40%;
}





</style>
