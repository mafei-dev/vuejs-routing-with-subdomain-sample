<template>
    <div class="container">
        <div class="col-6" style="margin: auto">
            <form @submit.prevent="login">
                <div class="form-group row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                        <input type="email" v-model="loginData.username" class="form-control" id="staticEmail"
                               placeholder="email">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputPassword" v-model="loginData.password"
                           class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" id="inputPassword" placeholder="Password">
                    </div>
                </div>
                <button type="submit" class="btn btn-primary btn-block">Submit</button>

                <br>
                <br>
                <br>
                <router-link to="/">Back to home</router-link>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                loginData: {
                    username: null,
                    password: null,
                }
            }
        },
        methods: {
            login() {
                window.location = "admin";
            }
        }
    }
</script>

<style scoped>

</style>
