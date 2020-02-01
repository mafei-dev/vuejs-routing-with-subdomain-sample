<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png"/>
        <br>
        <router-link to="/login">
            <button class="btn btn-primary">login</button>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'home',
        components: {}
    }
</script>
