<template>
  <v-app>
    <v-main>
      <v-container>
        <v-tabs>
          <v-tab @click="login = true">Login</v-tab>
          <v-tab @click="register = true; login = false">Register</v-tab>
          <v-tab @click="forgotpassword = true; login = false; register = false">ForgotPassword</v-tab>
        </v-tabs>
        <div>
          <Login v-if="login" />

          <Register v-if="register" />

          <ForgotPassword v-if="forgotpassword" />
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  import Login from "@/components/Login";
  import Register from "@/components/Register";
  import ForgotPassword from "@/components/ForgotPassword";

  export default {
    name: 'App',
    components: {
      Login,
      Register,
      ForgotPassword
    },

    data(){
      return{
        login: true,
        register: false,
        forgotpassword: false,
      }
    },
    
  };
</script>