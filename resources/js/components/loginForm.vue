<template>
    <div>
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" v-model="user.email" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" v-model="user.password" id="exampleInputPassword1">
        </div>
        <button type="submit" @click="login" class="btn btn-primary">Submit</button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                user: {
                    email: "",
                    password: "",
                }
            }
        },
        methods: {
            login() {
                this.$store.dispatch( 'authUser/loginUser', this.user )
            }
        }
    }
</script>
