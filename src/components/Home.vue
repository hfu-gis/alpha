<template>
<div class="page-container">
    <video autoplay muted loop id="dnaBackground">
        <source src="../assets/dna.mp4" type="video/mp4">
    </video>
    <v-form v-model="valid" class="formular-wrapper">
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
           <p>Noch keinen Account?<br>
                <span style="text-decoration: underline;"><a href="/registrierung">Hier regsitrieren!</a></span>
           </p>
           <v-btn rounded outlined color="red" large>Login</v-btn>
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
    #dnaBackground {
        position: fixed;
        right: 0;
        bottom: 0;
        min-width: 100%;
        min-height: 100%;
     }

    .form-container {
        display: flex;
        flex-direction: column;
        position: relative;
        align-items: center;
        width: 37%;
        margin-top: 100px;
        padding: 20px 0 40px 0;
        border: 2px solid red;
        background: white;
    }

    .field-email {
        width: 60%;
    }

    .field-password {
        width: 60%;
    }

</style>