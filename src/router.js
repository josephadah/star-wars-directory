import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Planets from "./views/Planets.vue";
import Characters from "./views/Characters.vue";
import Starships from "./views/Starships.vue";
import StarshipDetails from "./views/StarshipDetails.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/starships",
      name: "starships",
      component: Starships
    },
    {
      path: "/starships/:id",
      name: "starship-details",
      component: StarshipDetails
    },
    {
      path: "/planets",
      name: "planets",
      component: Planets
    },
    {
      path: "/characters",
      name: "characters",
      component: Characters
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
