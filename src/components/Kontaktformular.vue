<template>

<v-row>
    <v-row justify="center" cols="12">
        <v-col cols="12" class="text-center">
            <h1>Kontaktformular</h1>
        </v-col>
        <v-col cols="12" class="text-center">
            <h2>Kontaktere uns, TeamAlpha!</h2>
        </v-col>
        
        <v-card cols="8" min-width="50%">
            <v-col cols="12" class="text-center">
                <h3> Klicke hier um uns direkt zu schreiben:</h3>
                </v-col>
            <v-col cols="12" class="text-center">
                <v-btn class="button" rounded outlined color="red" large>Alpha-Mail</v-btn>
            </v-col>
        </v-card>

        <v-col cols="12" class="text-center">
            <h3> ...oder...</h3>
        </v-col>

         <v-card cols="8" class="mb-8" min-width="50%">
            <v-col cols="12" class="text-center">
                <h3> fülle unser Kontaktformular aus:</h3>
            </v-col>
            <v-col cols="12" class="text-center">
                <v-text-field v-model="email" placeholder="Deine Email-Adresse"></v-text-field>
            </v-col>
            <v-col cols="12" class="text-center">
                <v-textarea v-model="message" placeholder="Deine Nachricht"></v-textarea>
            </v-col>
            <v-col cols="12" class="text-center">
                 <v-btn class="button" rounded outlined color="red" large @click="send">Senden</v-btn>
            </v-col>
        </v-card>
    </v-row>
</v-row>

    





</template>
<script>
export default {
    name: 'Kontaktformular',
    data:() => {
        return {
            email: "",
            message: ""
        }
    },
    methods: {
        send(){
            this.email = "";
            this.message = "";
            alert("Danke für deine Nachricht!")
        }
    }
  
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
</style>