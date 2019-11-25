<template>
    <div>
        <!-- Background Video -->
        <!-- <video autoplay muted loop id="backgroundVideo">
            <source src="video-dna.mp4" type="video/mp4">
        </video> -->

        <!-- Login Formular -->
        <form class="box" action="login.html" method="post">
            <h1>Login</h1>
            <input type="text" name="" placeholder="Benutzername">
            <input type="password" name="" placeholder="Passwort">
            <input type="submit" name="" value="Login">
            <p>Neu bei ALPHA?
            <br>
            <a href="../registration/select-role.html"><span style="text-decoration: underline; color: white;">Account erstellen</span></a>
            </p>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style scoped>

/* Login Formular */

/* Generelle Styles */
.box {
    width: 300px;
    padding: 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #191919;
    opacity: 0.9;
    text-align: center;
}

/* Überschrift */
.box h1 {
    color: white;
    text-transform: uppercase;
    font-weight: 500;
}

/* New to ALPHA */
.box p {
    color: white;
    font-size: 14px;
    text-align: right;
    margin: 30px 0 -10px 0;
}

/* Styles für input Felder "text" und "passwort" */
.box input[type = "text"],.box input[type = "password"] {
    border: 0;
    background: none;
    display: block;
    margin: 20px auto;
    text-align: center;
    border: 2px solid #d63031;
    padding: 14px 10px;
    width: 200px;
    outline: none;
    color: white;
    border-radius: 25px;
    transition: 0.25s;
}

/* Styles für input Felder "text" und "password", bei focus */
.box input[type = "text"]:focus,.box input[type = "password"]:focus {
    width: 280px;
    border-color: #ffffff;
}

/* Styles input Feld "submit" */
.box input[type = "submit"] {
    border: 0;
    background: none;
    display: block;
    margin: 20px auto;
    text-align: center;
    border: 2px solid #ffffff;
    padding: 14px 40px;
    outline: none;
    color: white;
    border-radius: 25px;
    transition: 0.25s;
    cursor: pointer;
}

/* Styles input Feld "submit", bei hover */
.box input[type = "submit"]:hover {
    background: #d63031;
    border: none;
}

/* Background Video */
#backgroundVideo {
       position: fixed;
       right: 0;
       bottom: 0;
       min-width: 100%;
       min-height: 100%;
   }
</style>