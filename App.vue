<template>
  <v-app>
    <v-main>
      <v-container>
        <v-tabs>
          <v-tab @click="login = true">Login</v-tab>
          <v-tab @click="register = true; login = false">Register</v-tab>
        </v-tabs>
        <div>
          <Login v-if="login" />

          <Register v-if="register" />
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  import Login from "@/components/Login";
  import Register from "@/components/Register";

  export default {
    name: 'App',
    components: {
      Login,
      Register
    },

    data(){
      return{
        login: true,
        register: false,
      }
    },
    
  };
</script>