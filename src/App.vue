<template>
  <div>
    <AppHeader />
    <main class="container">
      <router-view :key="$route.fullPath" />
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

