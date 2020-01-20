<template>
    <v-row cols="12">
        <v-col cols="12">
            <v-row justify="center" cols="12">
                <v-col cols="12" class="text-center">
                    <h1>Einstellungen</h1>
                </v-col>
            </v-row>

            <v-row justify="center" cols="12">
                <v-col cols="12" class="text-center">
                    <v-avatar size="10em" id="Aang">
                    </v-avatar>
                </v-col>
            </v-row>
            
            <v-row justify="center" cols="12">
                <v-card cols="12" class="mb-8" min-width="50%">
                    <v-col cols="12" class="text-center">
                        <h3> Ändere deine Profildaten!</h3>
                    </v-col>
                   
                    <v-col cols="12" class="text-start">
                        <span>Dein Name ist: {{firstname}} {{lastname}}</span>
                    </v-col>
                   
                    <v-col cols="12" class="text-center">
                        <v-text-field v-model="first" placeholder="Dein neuer Vorname:"></v-text-field>
                    </v-col>
                  
                    <v-col cols="12" class="text-center">
                        <v-text-field v-model="last" placeholder="Dein neuer Nachname:"></v-text-field>
                    </v-col>

                    <v-col cols="12" class="text-start">
                        <span>Deine Email ist: {{email}}</span>
                    </v-col>
                   
                    <v-col cols="12" class="text-center">
                        <v-text-field v-model="newEmail" placeholder="Deine neue Email:"></v-text-field>
                    </v-col>

                    <v-col cols="12" class="text-start">
                        <span>Passwort ändern:</span>
                    </v-col>
                   
                    <v-col cols="12" class="text-center">
                        <v-text-field v-model="pwOld" :append-icon="showOld ? 'mdi-eye' : 'mdi-eye-off'" :type="showOld ? 'text' : 'password'" @click:append="showOld = !showOld" :error-messages="error" @input="checkPw" placeholder="Dein altes Passwort:"></v-text-field>
                    </v-col>
                   
                    <v-col cols="12" class="text-center">
                        <v-text-field v-model="pwNewOne" :append-icon="showNewOne ? 'mdi-eye' : 'mdi-eye-off'" :type="showNewOne ? 'text' : 'password'" @click:append="showNewOne = !showNewOne" :error-messages="error" labe="password"  @input="checkPW" placeholder="Dein neues Passwort:"></v-text-field>
                    </v-col>
                   
                    <v-col cols="12" class="text-center">
                        <v-text-field v-model="pwNewTwo" :append-icon="showNewTwo ? 'mdi-eye' : 'mdi-eye-off'" :type="showNewTwo ? 'text' : 'password'" @click:append="showNewTwo = !showNewTwo" :error-messages="error" labe="password" @input="checkPW" placeholder="Dein neues Passwort wiederholen:"></v-text-field>
                    </v-col>

                    <v-col cols="12" class="text-center">
                        <v-btn class="button" rounded outlined color="red" large @click="change" :disabled="!validat">ändern</v-btn>
                    </v-col>
                </v-card>
             </v-row>
        </v-col>
    </v-row>
</template>

<style scoped>
#Aang{
    background-image: url("../assets/Settings3_profil.jpg");
    background-size: 100%;
}
</style>

<script>
export default  {
    name: "Settings",
   data:() => {
        return {
            firstname: "Tobi",
            lastname: "Fischer",
            first:"",
            last:"",
            email:"Tobi@Fischer.de",
            newEmail:"",
            pwOld:"",
            pwNewOne:"",
            pwNewTwo:"",
            validate: false,
            error: null,
            showOld: false,
            showNewOne: false,
            showNewTwo: false,
             
        }
    },
    methods: {
        change(){
            this.firstname=this.first
            this.lastname=this.last
            this.email=this.newEmail
            this.first="";
            this.last="";
            this.newEmail="";
            this.pwOld="";
            this.pwNewOne="";
            this.pwNewTwo="";

            alert("Deine Einstellungen wurden verändert!")
        },
        checkPW() {

                if(this.pwOld == this.pwNewOne) {
                    this.error = "Dein neues Passwort muss ein anderes als dein altes Passwort sein";
                    return false;
                }
                if(this.pwNewOne !== this.pwNewTwo){
                    this.error = "Password ist nicht gleich";
                    this.validat = false;
                    return false;
                }
                if(this.pwNewOne.length < 8) {
                    this.error = "Dein Passwort muss mindestens 8 Zeichen haben";
                    return false;
                }
                
                this.error = null;
                this.validat = true;
                return true;
            },
        }    
    }

</script>