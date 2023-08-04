<script setup lang="ts">

</script>
<template>
  <div class="content-container">
    <router-link class="about" to="/about">
        <img src="/about.webp" alt="about me icon" class="h-12">
        <p>About.txt</p>
    </router-link>
    <router-link class="about" to="/resume">
        <img src="/about.webp" alt="about me icon" class="h-12">
        <p>Resume.txt</p>
    </router-link>
    <router-link class="about" to="/contact">
        <img src="/about.webp" alt="about me icon" class="h-12">
        <p>Contact.txt</p>
    </router-link>
    <router-link class="about" to="/projects">
        <img src="/about.webp" alt="about me icon" class="h-12">
        <p>Projects.txt</p>
    </router-link>
  </div>
</template>
<style scoped>
.content-container{
    @apply flex items-center justify-center w-full h-full
}

.about{
    @apply flex flex-col items-center justify-center w-full h-full mt-2
}
</style>