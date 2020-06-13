<template>
    <v-app id="inspire">
        <v-navigation-drawer
            v-model="drawer"
            app
        >
            <v-list dense>
                <v-list-item to="/dashboard">
                    <v-list-item-action>
                        <v-icon>mdi-home</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Dashboard</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item to="/contact">
                    <v-list-item-action>
                        <v-icon>mdi-email</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Contact</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link @click="logout">
                    <v-list-item-action>
                        <v-icon>mdi-power</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Log Out {{ authUser.name }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar
            app
            color="indigo"
            dark
        >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>Application</v-toolbar-title>
        </v-app-bar>

        <v-main>
            <v-container
                class="fill-height"
                fluid
            >
            <router-view></router-view>
            </v-container>
        </v-main>
        <v-footer
            color="indigo"
            app
        >
            <span class="white--text">Hugo Duarte &copy; 2020</span>
        </v-footer>
    </v-app>
</template>

<script>
    export default {
        props: {
            source: String,
        },
        data: () => ({
            drawer: null,
        }),
        computed: {
            loggedIn: {
                get() {
                    return this.$store.state.authUser.loggedIn
                }
            },
            authUser: {
                get() {
                    return this.$store.state.authUser.user
                }
            }
        },
        methods: {
            logout(){
                this.$store.dispatch("authUser/logoutUser")
            }
        },
        created() {
            if (localStorage.hasOwnProperty("app_token")) {
                axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("app_token")
                this.$store.dispatch("authUser/getUser")
            } else {
                window.location.replace("/login")
            }
        }
    }
</script>
