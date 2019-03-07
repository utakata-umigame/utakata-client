import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Mondai from "./views/Mondai.vue";
import AddPuzzle from "./views/AddPuzzle.vue";
import Puzzle from "./views/Puzzle.vue";
import MyPage from "./views/MyPage.vue";
import Signin from "./views/Signin.vue";
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
    },
    {
      path: "/puzzle/show/:id",
      name: "puzzle",
      component: Puzzle
    },
    {
      path: "/mypage",
      name: "mypage",
      component: MyPage
    },
    {
      path: "/signin",
      name: "signin",
      component: Signin
    }
  ]
});
