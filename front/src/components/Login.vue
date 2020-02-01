<template>
    <div class="container">
        <div class="col-6" style="margin: auto">
            <p>hint :
                admin username is admin
                cashier username is cashier
                password - Any
            </p>
            <form @submit.prevent="login">
                <div class="form-group row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                        <input type="text" v-model="loginData.username" class="form-control" id="staticEmail"
                               placeholder="username">
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
                if (this.loginData.username.startsWith("admin")) {
                    window.location.href = "admin";
                } else if (this.loginData.username.startsWith("cashier")) {
                    window.location.href = "cashier";
                }
            }
        }
    }
</script>

<style scoped>

</style>
