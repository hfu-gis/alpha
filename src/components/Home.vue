<template>
<div class="page-container">
    <v-form v-model="valid">
       <v-container class="form-container">
           <h1>ALPHA</h1>
           <v-row class="field-email">
               <v-col>
                   <v-text-field 
                   v-model="email" 
                   :rules="emailRules"
                   label="E-Mail"
                   required
                   ></v-text-field>
               </v-col>
           </v-row>
           <v-row class="field-password">
               <v-col>
                   <v-text-field 
                   v-model="password" 
                   label="Passwort"
                   required
                   ></v-text-field>
               </v-col>
           </v-row>
           <v-btn class="login-button" rounded outlined color="red" large>Login</v-btn>
       </v-container>

   </v-form>

</div>
</template>

<script>
export default {
    name: 'Home',
    data: () => ({
        valid: false,
        password: '',
        email: '',
        emailRules: [
            v => !!v || 'E-mail is requiered',
            v => /.+@.+/.test(v) || 'E-mail must be valid',
        ],
    }),
}
</script>

<style scoped>
    

    .form-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: white;
        width: 37%;
        padding: 20px 0 40px 0;
        margin-top: 100px;
        border: 2px solid red;
    }

    .field-email {
        width: 60%;
    }

    .field-password {
        width: 60%;
    }

</style>