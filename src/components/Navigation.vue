<template>
    <div class="main-navigation">
        <nav>
            <div class="nav-items">
            <router-link to="/">Home</router-link>
            <router-link to="/registrierung">Registrierung</router-link>
            <router-link to="/module">Module</router-link>
            <router-link to="/kontaktformular">Kontaktformular</router-link>
            <router-link to="/settings" ><v-icon left color="white">mdi-wrench</v-icon> Einstellungen </router-link>
            <router-link to="/Calendar">Kalender</router-link>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Navigation'
}
</script>

<style scoped>
    .main-navigation {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background: black;
        height: 100px;
        width: 100%;
        box-shadow: 2px 2px 5px red;
    }

    .main-navigation a {
        color: white;
        font-size: 30px;
        text-decoration: none;
        padding: 0 20px 0 20px;
    }

    .main-navigation a:hover {
        color: red;
    }


</style>