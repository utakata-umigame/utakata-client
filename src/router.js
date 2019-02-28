import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Mondai from "./views/Mondai.vue";
import AddPuzzle from "./views/AddPuzzle.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue")
    },
    {
      path: "/mondai/:room",
      name: "mondai",
      component: Mondai
    },
    {
      path: "/add",
      name: "add",
      component: AddPuzzle
    }
  ]
});
