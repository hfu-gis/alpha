<template>
    <div>
    <v-form v-model="valid">
       <v-container class="wrapper mt-8" >
           <h1 class="text-center">Hier kannst Du einen Account erstellen!</h1>
           <div class="wrapper-form">
               <v-row>
               <v-col>
                   <v-text-field label="Vorname" required></v-text-field>
               </v-col>
               <v-col>
                   <v-text-field label="Nachname" required></v-text-field>
               </v-col>
           </v-row>
           <v-row>
               <v-col>
                   <v-text-field label="Hochschule" required></v-text-field>
               </v-col>
           </v-row>
           <v-row>
               <v-col>
                   <v-text-field 
                   v-model="email" 
                   :rules="emailRules"
                   label="E-Mail"
                   required
                   ></v-text-field>
               </v-col>
           </v-row>
           <v-row>
               <v-col>
                   <v-text-field
                   type="password"
                   v-model="password" 
                   label="Passwort"
                   required
                   ></v-text-field>
               </v-col>
               <v-col>
                   <v-text-field
                   type="password"
                   v-model="password" 
                   label="Passwort wiederholen"
                   required
                   ></v-text-field>
               </v-col>
           </v-row>
           </div>
           <v-btn @click="auth()" class="button" rounded outlined color="red" large>Account erstellen</v-btn>
         </v-container>
      </v-form>
    </div>
</template>

<script>
import firebase from 'firebase';

export default {
    name: 'registrierung',
    data: () => ({
        valid: false,
        password: '',
        email: '',
        emailRules: [
            v => !!v || 'E-mail is requiered',
            v => /.+@.+/.test(v) || 'E-mail must be valid',
        ],
    }),
    methods: {
        auth() {
            firebase.auth().createUserWithEmailAndPassword(
                this.email,
                this.password
            )
            .then(() => {
                this.$router.push('/Calendar')
            },
            err => {
                alert(err)
            })
        }
    }
}
</script>

<style scoped>
    .wrapper {
        display: flex;
        flex-direction: column;
    }
    
    .wrapper-form {
        width: 50%;
        margin: auto;
    }

    .button {
        width: 20%;;
        margin: auto;
    }
</style>