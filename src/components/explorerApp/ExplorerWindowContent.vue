<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useTaskbarStore } from "@/stores";
const router = useRouter();

const goTo = (path: string): void => {
    router.push({ path: `/${path}` });
}

const addInTaskbar = (target: string): void => {
    const taskbarStore = useTaskbarStore()
    taskbarStore.addMinizedWindow(target);
}
</script>
<template>
  <div class="content-container">
    <router-link class="about" to="/about" @click="addInTaskbar('about')" @touchstart.passive="goTo('about')">        
        <img src="/about.webp" alt="about me icon" class="h-12">
        <p>About.txt</p>        
    </router-link>
    <router-link class="about" to="/resume" @click="addInTaskbar('resume')" @touchstart.passive="goTo('resume')">                
        <img src="/resume.webp" alt="about me icon" class="h-12">
        <p>Resume.txt</p>        
    </router-link>
    <router-link class="about" to="/projects" @click="addInTaskbar('projects')" @touchstart.passive="goTo('projects')">        
        <img src="/about.webp" alt="about me icon" class="h-12">
        <p>Projects.txt</p>        
    </router-link>
    <router-link class="about" to="/contact" @click="addInTaskbar('contact')" @touchstart.passive="goTo('contact')">                
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