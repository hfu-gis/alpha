<template>
    <div class="body-1">>
        <h1>Kontaktformular</h1>
        <br>
            <div>
                <h2> Kontaktere uns, TeamAlpha!</h2>
                <br>

                <h3> Klicke hier um uns direkt zu schreiben:</h3>
                <br>
            </div>
            
                <a href="support@mail.alpha">
                    <v-btn text outlined shaped   
                            oneclick="e-mail">Alpha-Mail
                    
                    </v-btn>
                </a>
            
            <h3>oder fülle unser Kontaktformular aus:</h3>
            <br>
            <h4> Deine E-Mail-Adresse</h4>
            
            <div>
            <input type="Text" name="AdressBox" id="adressBox" placeholder= " Email-Adresse">
            </div>
            <h4> Deine Nachricht</h4>
            <input type="Text" name="TextBox" id="textBox" placeholder="...">

            <v-btn text outlined shaped
                   oneclick="absenden">absenden
            </v-btn>
    </div>

    
</template>

<script>
export default {
    name: 'Kontaktformular'
  
} 
</script>

<style scoped>
    h1 {text-align: center;}
    h2 {text-align: center;}
    h3 {text-align: center;}
    h4 {text-align: center;}
    
    #adressBox {  
            
        text-align: center;
        margin: 30px auto 0;
        display: block;
        width: 300px;
        height: 40px;
        font-size: 30px;
        background: darkslategray;
        border-radius: 8px;
        color: white;
        
        
    }
    #textBox {      
        text-align:left top;
        margin: auto;
        display: block;
        width: 300px;
        height: 100px;
        font-size: 30px;
        background: darkslategray;
        border-radius: 8px;
        color: white;

        /* <v-textarea
        v-model="bio"
        auto-grow
        filled
        color="deep-purple"
        label="Bio"
        rows="1"
      ></v-textarea> */
        
    }
</style>