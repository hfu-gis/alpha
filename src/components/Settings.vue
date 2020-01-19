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
                        <v-text-field v-model="last" placeholder="Deine neuere Email:"></v-text-field>
                    </v-col>


                    <v-col cols="12" class="text-center">
                        <v-btn class="button" rounded outlined color="red" large @click="change">ändern</v-btn>
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
            lastname: "Fuwa Facking Fischer",
            first:"",
            last:"",
            email:"Tobi@Fischer.de",
            newEmail:""
    
        }
    },
    methods: {
        change(){
            this.firstname=this.first
            this.lastname=this.last
            this.email=this.newEmail
        }    
    }
}
</script>