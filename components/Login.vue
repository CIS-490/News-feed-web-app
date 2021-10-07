<template>
  <v-app>
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center" dense>
          <v-col cols="12" sm="8" md="4" lg="4">
            <v-card elevation="0">
            <div class="text-center">
                <h1 class="mb-2">Login</h1>
              </div>
              <v-card-text>
                <v-form>
                  <v-text-field label="Enter your email" name="email" prepend-inner-icon="mdi-mail" type="email" class="rounded-0" outlined></v-text-field>
                  <v-text-field label="Enter your password" name="password" prepend-inner-icon="mdi-lock"  class="rounded-0" outlined> </v-text-field>
                  <v-btn class="rounded-0" color="#000000" x-large block dark>Login</v-btn>
                  <v-card-actions class="text--secondary">
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-form>
              </v-card-text>
              <v-card-actions class="ml-6 mr-6 text-center">
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style lang="css" scoped>
</style>