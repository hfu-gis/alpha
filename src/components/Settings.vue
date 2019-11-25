<template>
    
         

 <div id="app">
     <h1>Einstellungen</h1> 
        <v-app id="inspire">
            <v-container>
                <v-row dense>
                   
                    <v-col
                            v-for="(item, i) in items"
                            :key="i"
                            cols="12"
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
                                        <v-btn text>Share</v-btn>



                                        <v-spacer></v-spacer>

                                        <v-btn
                                                icon
                                                @click="show = !show"
                                        >
                                            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                        </v-btn>
                                    </v-card-actions>
                                    <v-expand-transition>
                                        <div v-show="show">
                                            <v-divider></v-divider>

                                            <v-card-text class="Text" v-text="item.text">

                                            </v-card-text>
                                        </div>
                                    </v-expand-transition>
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
    name: 'Settings',
    data:()=>({
        show:false,

    items: [
                {
                    color: '#1F7087',
                    src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
                    title: 'Benachrichtigungen',
                    subtext: 'Hier kannst du bearbeiten wie du benachrichtigt werden willst!',
                    text:'Hallo'
                },
                {
                    color: '#952175',
                    src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
                    title: 'Kontakte',
                    subtext: 'Kontakte',
                    text:'hallo'
                },
                {
                    color: '#1F7087',
                    src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
                    title: 'Benachrichtigungen',
                    subtext: 'Hier kannst du bearbeiten wie du benachrichtigt werden willst!',
                    text:'Hallo'
                },
            ],
    }),
}
</script>

<style scoped>

</style>