<script setup>

</script>

<template>
  <div class="container">
    <nav>
      <RouterLink to="/">Home | </RouterLink>
      <RouterLink to="/about">About | </RouterLink>
      <RouterLink to="/contactus">Contact Us</RouterLink>
    </nav>
    <div>
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
