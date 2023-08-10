<script setup lang="ts">
useHead({
  title: 'André Domingues - Portfolio',
  meta: [
    {
      name: 'Portfolio',
      content: 'Portfolio',
    },
  ],
})
</script>

<template>
    <main class="main">
      <RouterView />      
      <TaskBar />
    </main>
</template>
<style scoped>
.main {
  margin: auto;
  background: url(/img/wallpaper.webp) #fff;
  min-height: 100vh;
  background-position: center;
  background-size: cover;
}
</style>
