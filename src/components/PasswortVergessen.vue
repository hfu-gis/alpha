<template>
<div>
    <main class="wrapper">
            <section class="wrapperForm">
                <section class="setPassword">
                    <h2>Neues Passwort festlegen</h2>
                    <form>
                        <input type="password" name="newPassword" id="newPassword" placeholder="Neues Passwort" onkeyup="checkSafety()" required>
                        <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Neues Passwort bestätigen" required>
                    </form>
                </section>
        
                <section class="securityAdvices">
                    <h3>Passwort-Sicherheitskriterien</h3>
                    <ul>
                        <li id="lowercaseAndUpperCase" class="securityCriteria">- Klein- und Großbuchstaben (a-z,A-Z)</li>
                        <li id="digit" class="securityCriteria">- Mindestens eine Ziffer (0-9)</li>
                        <li id="specialSign" class="securityCriteria">- Mindestens ein Sonderzeichen (!?@#$%&amp;*_=+;:,&lt;.>)</li>
                        <li id="eightSigns" class="securityCriteria">- Mindestens 8 Zeichen lang</li>
                    </ul>
                    <button class="btn" v-on:click="showPassword">Passwort festlegen</button>
                    </section>
            </section>
        </main>
</div>
</template>

<script>
export default {
    name: 'PasswortVergessen',
}
</script>

<style scoped>

    /* Hard-Reset der Abstände */
* {
    padding: 0;
    margin: 0;
}

html, body {
    height: 100%;
}

/* Falls ein Browser die neuen HTML5 Elemente nicht kennt, sollen diese als Block-Elemente dargestellt werden */
article, aside, details, figcaption, figure, footer, header, hgroup, main, nav, section, summary {
    display: block;
}

/* Beinhaltet alle Elemente auf der Page */
.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100%;
    background-color: whitesmoke;
}

/* Beinhaltet alle Elemente des kompletten Formulars*/
.wrapperForm {
    display: inline-flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 40%;
    margin-top: 150px;
    padding-bottom: 34px;
    font-family: Arial, Helvetica, sans-serif;
    background: white;
    box-shadow: 3px 4px 3px lightgrey;
}

/* Beinhaltet das Formular (linke Container) */
.setPassword {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 30px;
    margin-left: 0px;
}

/* Styled die Überschrift des Formulars */
.setPassword h2 {
    font-size: 1.3em;
    color: #565756;
}

/* Styled die input-Felder */
input {
    border: 1px solid lightgray;;
    border-radius: 3px;;
    width: 90%;
    padding: 10px 0;
    margin: 30px 0 0 0;
}

/* Styled den Platzhalter in den input-Feldern */
::-webkit-input-placeholder {
    font-size: 0.9em;
    padding-left: 8px;
}



/* Beinhaltet alle Elemente des rechten Containers */
.securityAdvices {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 32px;
    margin-left: -23px;
}

/* Styled die Überschirft des rechten Containers */
.securityAdvices h3 {
    font-size: 1.1em;
    color: #565756;
    margin-bottom: 36px;
}

/* Styled die li-Tags */
.securityAdvices ul li {
    font-size: 0.9em;
    padding: 1.7px 0;
    list-style-type: none;
    color: red;
    flex-basis: 100%;
}


/* Styled den Button */
.btn {
    font-size: 0.8em;
    background-color: black;
    color: white;
    border: 1px solid black;
    border-radius: 4px;
    margin: 120px 0 0 160px;
    padding: 10px 0;
    width: 50%;
}

/* ****************************************************
*************** Start Media Queries *******************
******************************************************* */

@media (max-width: 1590px) {
    .setPassword {
        align-items: center;
    }
    .securityAdvices {
        align-items: center;
    }
    .securityAdvices ul {
        width: 80%;
        margin-top: -20px;
        margin-bottom: 5px;
    }
    .btn {
        margin: 20px;
    }
}

@media (max-width: 900px) {
    .wrapperForm {
        width: 90%;
    }
}
</style>