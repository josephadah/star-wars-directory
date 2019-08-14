<template>
  <!-- <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>-->
  <div>
    <AppHeader />
    <main class="container">
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "./components/layouts/AppHeader";
import AppFooter from "./components/layouts/AppFooter";

export default {
  components: {
    AppHeader,
    AppFooter
  }
};
</script>

<style lang="scss">
</style>
