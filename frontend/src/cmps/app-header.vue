<template>
  <header class="app-header-container main-layout full">
    <div class="app-header">
      <span class="logo">
        <img :src="logoSrc" alt="world" />
        MapUP
      </span>
      <nav></nav>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    logoSrc() {
      return new URL(
        `@/assets/img/geolocation-svgrepo-com.svg`,
        import.meta.url
      ).href;
    },
  },
};
</script>

