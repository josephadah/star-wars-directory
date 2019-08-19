<template>
  <footer class="container-fluid bg-dark text-center">
    <p class="text-white p-2">
      Copyright &copy; {{ new Date().getFullYear() }}.
      Made with
      <span
        class="text-danger pl-2 pr-2"
        style="vertical-align: middle;"
      >
        <i class="fas fa-heart"></i>
      </span>
      by
      <a href="https://josephadah.com" target="_blank">Joseph Adah</a>.
    </p>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  position: relative;
  bottom: -1em;
}
</style>
