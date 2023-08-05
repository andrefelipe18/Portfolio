<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter();

const goTo = (path: string) => {
    router.push({ path: `/${path}` });
}
</script>
<template>
  <div class="content-container">
    <router-link class="about" to="/about" @touchstart.passive="goTo('about')">        
        <img src="/about.webp" alt="about me icon" class="h-12">
        <p>About.txt</p>        
    </router-link>
    <router-link class="about" to="/resume" @touchstart.passive="goTo('resume')">                
        <img src="/resume.webp" alt="about me icon" class="h-12">
        <p>Resume.txt</p>        
    </router-link>
    <router-link class="about" to="/projects" @touchstart.passive="goTo('projects')">        
        <img src="/about.webp" alt="about me icon" class="h-12">
        <p>Projects.txt</p>        
    </router-link>
    <router-link class="about" to="/contact" @touchstart.passive="goTo('contact')">                
        <img src="/resume.webp" alt="about me icon" class="h-12">
        <p>Contact_Me.txt</p>        
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