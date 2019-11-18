<template>
  <div id="app">

      <v-card
              max-width="auto"
              max-height="auto"



      >



        <v-container >
          <v-row dense>
            <v-col cols="12">
              <v-card
                      color="#385F73"
                      dark
              >
                <v-card-title class="headline">Skripte</v-card-title>

                <v-card-subtitle>Lade dir die Skripte herunter</v-card-subtitle>

                <v-card-actions>
                  <v-btn text>Dateien</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>

            <v-col
                    v-for="(item, i) in items"
                    :key="i"
                    cols="12"
            >
              <v-card
                      :color="item.color"
                      dark
              >
                <div class="d-flex flex-no-wrap justify-space-between">
                  <div>
                    <v-card-title
                            class="headline"
                            v-text="item.title"
                    ></v-card-title>

                    <v-card-subtitle v-text="item.subtitle"></v-card-subtitle>
                  </div>

                  <v-avatar
                          class="ma-3"
                          size="125"
                          tile
                  >
                    <v-img :src="item.src"></v-img>
                  </v-avatar>



                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>

  </div>
</template>


  <script>
  export default {
    data: () => ({
      items: [
        {
          color: '#1F7087',
          src: '',
          title: 'Materialien',
          subtitle: 'Materialien herunterladen',

        },
        {
          color: '#952175',
          src: '',
          title: 'Kontakt',
          subtitle: 'Kontakt anrufen',
        },
      ],
    }),
  }

</script>

<style scoped>
/* CSS für diese Seite hier einfügen */
</style>
