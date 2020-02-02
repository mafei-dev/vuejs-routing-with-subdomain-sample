<template>
    <div>
        <Nav></Nav>
        <Body></Body>
        <router-link to="add-user">Add user</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    import Nav from "../components/Nav";
    import Body from "../components/Body";

    export default {
        name: "AdminDashboard",
        components: {Body, Nav}
    }
</script>

<style scoped>

</style>
