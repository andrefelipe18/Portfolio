<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useTaskbarStore, useNotepadStore } from "@/stores";
const router = useRouter();
const taskbarStore = useTaskbarStore()
const notepadStore = useNotepadStore()

const goTo = (path: string): void => {
    router.push({ path: `/${path}` });

    taskbarStore.addMinizedWindow(path)
    notepadStore.setNotepadOpen(true)
}

const addInTaskbar = (target: string): void => {    
    taskbarStore.addMinizedWindow(target);
    notepadStore.setNotepadOpen(true)
}
</script>
<template>
  <div class="content-container">
    <router-link class="about" to="/about" @click="addInTaskbar('about')" @touchstart.passive="goTo('about')">        
        <img src="/img/about.webp" alt="about me icon" class="h-12">
        <p class="text-gray-200">About.txt</p>        
    </router-link>
    <router-link class="about" to="/resume" @click="addInTaskbar('resume')" @touchstart.passive="goTo('resume')">                
        <img src="/img/resume.webp" alt="about me icon" class="h-12">
        <p class="text-gray-200">Resume.txt</p>        
    </router-link>
    <router-link class="about" to="/projects" @click="addInTaskbar('projects')" @touchstart.passive="goTo('projects')">        
        <img src="/img/about.webp" alt="about me icon" class="h-12">
        <p class="text-gray-200">Projects.txt</p>        
    </router-link>
    <router-link class="about" to="/contact" @click="addInTaskbar('contact')" @touchstart.passive="goTo('contact')">                
        <img src="/img/resume.webp" alt="about me icon" class="h-12">
        <p class="text-gray-200">Contact_Me.txt</p>        
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