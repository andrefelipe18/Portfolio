<script setup lang="ts">

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
  background: url(/wallpaper.webp) #fff;
  min-height: 100vh;
  background-position: center;
  background-size: cover;
}
</style>
