<template>
    <div>
        <Nav></Nav>
        <Body></Body>
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
