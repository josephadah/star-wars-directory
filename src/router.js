import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Planets from "./views/Planets.vue";
import Characters from "./views/Characters.vue";
import Starships from "./views/Starships.vue";
import StarshipDetails from "./views/StarshipDetails.vue";
import PlanetDetails from "./views/PlanetDetails.vue";
import CharacterDetails from "./views/CharacterDetails.vue";

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
      path: "/planets/:id",
      name: "planet-details",
      component: PlanetDetails
    },
    {
      path: "/characters",
      name: "characters",
      component: Characters
    },
    {
      path: "/characters/:id",
      name: "character-details",
      component: CharacterDetails
    },
    {
      path: "**",
      redirect: "/"
    }
  ]
});
