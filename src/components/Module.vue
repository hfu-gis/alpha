
<template>
    <div id="app" >
        <h1>Module</h1>
        <v-app id="inspire">
            <v-container>
                <v-row dense>
                   
                    <v-col
                            v-for="(item, i) in items"
                            :key="i"
                            
                            
                    >
                        <v-card
                                class="mx-auto"
                                max-width="344"
                                :color="item.color"
                                dark
                                
                        >
                            <v-img
                                    :src="item.src"
                                    height="400px">
                            </v-img>
                            <div >
                                <div>
                                    <v-card-title
                                            class="headline"
                                            v-text="item.title"
                                    ></v-card-title>

                                    <v-card-subtitle v-text="item.subtext"></v-card-subtitle>
                                    <v-card-actions>

                                    <v-expansion-panels
                                      v-model="panel"
                                        
                                        

                                    >
                                        <v-expansion-panel >
                                        <v-expansion-panel-header>Mehr Anzeigen</v-expansion-panel-header>
                                        <v-expansion-panel-content
                                            class=" body-2 text-center"
                                            v-text="item.text"
                                            
                                        >
                                           
                                        </v-expansion-panel-content>
                                        </v-expansion-panel>
                                    </v-expansion-panels>
  

                                    </v-card-actions>
                                </div>
                            </div>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-app>
    </div>
</template>

<script>

    export default {
        name: 'Module',
        data: () => ({
            show:false,
            
        
            
            
            items: [
                {
                    color:'#FF8A80', 
                    src: require('@/assets/Modul1.jpg'),
                    title:'Skripte',
                    subtext:'',
                    text:'Dateien',
                    
                    
                    
                    
                   
                },
                     
                {
                    color: '#FF5252',
                    src: require('@/assets/Modul2.jpg'),
                    title: 'Materialien',
                    subtext: '',
                     text:'Java'
                    
                    
                },
                {
                    color: '#FF1744',
                    src: require('@/assets/Modul3.jpg'),
                    title: 'Kontakte',
                    subtext: '',
                    text:'E-Mail',
                    
                   
                    
                },
            ],
        }),
    }
</script>

<style scoped>
    /* CSS für diese Seite hier einfügen */
    
</style>
