<script setup>
import rentalApp from "@/views/rental-app.vue";
import appHeader from "@/cmps/app-header.vue";
</script>

<template>
  <section>
    <app-header />
    <main class="main-layout">
      <rental-app />
    </main>
  </section>
</template>
