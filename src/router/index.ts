import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/favorites",
    name: "favoriler",
    component: () => import("@/views/Favorites.vue"),
  },
  {
    path: "/movie/:id?",
    name: "movie",
    component: () => import("@/views/MovieDetail.vue"),
    beforeEnter: (to, from, next) => {
      if (!to.params.id) {
        console.log(to);

        next({ name: "error" });
        return;
      }

      next();
    },
  },
  {
    path: "/error",
    name: "error",
    component: () => import("@/views/Error.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
