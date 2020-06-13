import Vue from "vue"
import VueRouter from "vue-router"
import Dashboard from "../components/dashboard/container"
import Contact from "../components/contact/container"

Vue.use(VueRouter)

const routes = [
    {
        component: Dashboard,
        name: "dashboard",
        path: "/dashboard"
    },
    {
        component: Contact,
        name: "contact",
        path: "/contact"
    },
];

export default new VueRouter({
   routes
});
