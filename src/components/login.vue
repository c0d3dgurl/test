<template>
 <form v-on:submit.prevent="login" class=" form-style">
    <h3 class="heading">Login</h3>

    <div class="form-group">
        <label>email</label>
        <input name="email" type="email" v-model="email" class="form-control input-style" placeholder="Enter your email here...">
    </div>

    <div class="form-group">
        <label>password</label>
        <input name="password" type="password" v-model="password" class="form-control input-style" placeholder="Enter your password here..."/>
    </div>

    <button type ="submit" class=" btn btn-warning btn-style btn-round"> Sign in </button><br><br>
    <p v-if="incorrectAuth"> Incorrect email or password entered </p>
    <!-- <p>forgotten your password? <button class="btn btn warning btn-style btn-round">Contact Administrator</button></p> -->
    <!-- <button type="button" class="signup-btn btn-round">Sign Up</button> -->
    <div class="icon">
        <img class="icon-size" src="../assets/user.png" alt="">
    </div>
 </form>
</template>


<script>
    export default{
        name: 'login',
        data() {
            return {
                email: '',
                password: '',
                incorrectAuth: false
            }
        },
        methods:{
            login(){
                this.$store.dispatch('userLogin', {
                    email: this.email,
                    password: this.password
                    
                })
                .then(() => {
                   
                    if(this.$store.getters.getUser!==null){
                        localStorage.setItem('email', this.email)
                        this.$router.push({name: 'Navbar'})

                    }
                })
                .catch(err => {
                    console.log(err.message)
                    this.incorrectAuth = true
                })
            }
        }
    }

</script>

<style scoped>

.icon{
    position: absolute;
    
    left: 150px;
    top: -30px;
}

.icon-size{
    width: 35%;
}

 .input-style{
     border-radius: 20px;
 }

 .heading{
     margin-bottom: 30px;
 }
 .form-style{
     position: relative;
     padding: 30px;
     background-color: #c6e2ed;
     text-align: left;
     border-radius: 10%;
 }

 .btn-style{
     margin-top: 60px
 }
 .img {
     width: 70px;
     margin-top: 50px;
 }
</style>