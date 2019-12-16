<template>
    
         

 <div id="app">
     <h1>Einstellungen</h1> 
        <v-app id="inspire">
            <v-container>
                <v-row dense>
                   
                    <v-col
                            v-for="(item, i) in items"
                            :key="i"
                            cols= "12" sm= "4"
                            
                    >
                        <v-card
                                class="mx-auto"
                                max-width="344"
                                :color="item.color"
                                dark
                        >
                            <v-img
                                    :src="item.src"
                                    height="200px">
                            </v-img>
                            <div >
                                <div>
                                    <v-card-title
                                            class="headline"
                                            v-text="item.title"
                                    ></v-card-title>

                                    <v-card-subtitle v-text="item.subtext"></v-card-subtitle>
                                    <v-card-actions>

                                        <div clas=row>

                                        <a v-bind:href="link"> test
                                            <!-- <v-btn
                                            v-text= "item.text" > 
                                        </v-btn>-->
                                        </a>
                                        </div>

                                        

                                        
                                        

                                        <!-- <v-expansion-panels v-model="panel">

                                            <v-expansion-panel>
                                                <v-expansion-panel-header>Mehr Anzeigen</v-expansion-panel-header>
                                                <v-expansion-panel-content
                                                class="body-2 text-center"
                                                v-text="item.text"
                                                
                                                >

                                                </v-expansion-panel-content>
                                            </v-expansion-panel>
                                        </v-expansion-panels> -->

                                    </v-card-actions>
                                
                                </div>
                            </div>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
            <div class="text-center">
            <v-btn 
            link to="/"
            rounded
            class="logout" 
            color="red" dark
            >Logout
        <v-icon dark right>mdi-cancel</v-icon>
        
      </v-btn>
            </div>
        </v-app>


</div>
</template>

<script>
export default {
    name: 'Settings',
    data:()=>({
        show:false,

    

    items: [
                {
                    color: '#1F7087',
                    src: require('@/assets/Settings1_benachrichtigungen.jpg'),
                    title: 'Benachrichtigungen',
                    subtext: 'Hier kannst du bearbeiten wie du bei Änderungen benachrichtigt werden willst!',
                    text:'test btn1',
                    link: '/Module'
                    
                },
                {
                    color: '#952175',
                    src: require('@/assets/Settings2_kontakt.jpg'),
                    title: 'Kontakt',
                    subtext: 'Du würdest gerne mit uns Kontakt aufnehmen?',
                    text:'test btn2',
                    to: '/Home'
                },
                {
                    color: '#2E8B57',
                    src: require('@/assets/Settings3_profil.jpg'),
                    title: 'Profil',
                    subtext: 'Hier kannst du dein Profil bearbeiten. Zeig wer du bist!',
                    text:'Hallo'
                },
            ],
    }),
}
</script>

<style scoped>

</style>