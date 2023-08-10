<script setup lang="ts">
import { useTaskbarStore, useExplorerStore, useNotepadStore } from '@/stores/'

const taskbarStore = useTaskbarStore()
const explorerStore = useExplorerStore()
const notepadStore = useNotepadStore()

const minimizeApps = computed(() => taskbarStore.windowsOpenedList)

const openExplorer = () => {
  explorerStore.setExplorerOpen(true)
}

const openNotepad = () => {
  notepadStore.setNotepadOpen(true)
}

const explorerOpen = computed(() => explorerStore.openWindow);
const notepadOpen = computed(() => notepadStore.isOpen);

watch(explorerOpen, (value) => {
  if (value) {
    const explorerLink = document.querySelector('#explorerMinimize') as HTMLElement
    
    if(explorerLink) {
        const explorer = explorerLink.parentElement as HTMLElement
        explorer.style.backgroundColor = '#474747'
        explorer.style.borderBottom = '1px solid #83c0ef'
    }
  } else {
    const explorerLink = document.querySelector('#explorerMinimize') as HTMLElement
    if(explorerLink) {
        const explorer = explorerLink.parentElement as HTMLElement
        explorer.style.backgroundColor = 'transparent'
        explorer.style.borderBottom = 'none'
    }
  }
});

watch(notepadOpen, (value) => {
  if (value) {
    setTimeout(() => {
        const notepadLink = document.querySelector('#notepadMinimize') as HTMLElement    
        if(notepadLink) {
            const notepad = notepadLink.parentElement as HTMLElement
            notepad.style.backgroundColor = '#474747'
            notepad.style.borderBottom = '1px solid #83c0ef'
        }
    }, 100);
  } else {
    const notepadLink = document.querySelector('#notepadMinimize') as HTMLElement    
    if(notepadLink) {
        console.log('FECHADO');
        const notepad = notepadLink.parentElement as HTMLElement
        notepad.style.backgroundColor = 'transparent'
        notepad.style.borderBottom = 'none'
    }
  }
});

const hora = computed(() => {
  const date = new Date()
  const hora = date.getHours()
  const minuto = date.getMinutes()
  const segundo = date.getSeconds()

  return `${hora}:${minuto}`
})
</script>
<template>
  <section>
    <div class="left-icons">
      <div class="container-logo-windows">
          <svg class="logo-windows" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="M6.555 1.375L0 2.237v5.45h6.555V1.375zM0 13.795l6.555.933V8.313H0v5.482zm7.278-5.4l.026 6.378L16 16V8.395H7.278zM16 0L7.33 1.244v6.414H16V0z"/></svg>
      </div>
      <div class="apps">
          <ul class="apps-list">
              <li v-for="app in minimizeApps" :key="app" class="app" >
                  <a v-if="app === 'explorer'" @click="openExplorer" id="explorerMinimize" @touchstart.passive="openExplorer">
                    <img  src="/img/Windows_Explorer.svg" class="icon" alt="Windows Explorer icon">
                  </a>
                  <router-link v-else :to="`/${app}`" @click="openNotepad" id="notepadMinimize" @touchstart.passive="openNotepad">
                    <img src="/img/notepad-icon.webp" class="icon" alt="Windows Notepad icon">
                  </router-link>
              </li>
          </ul>
      </div>
    </div>
    <div class="right-icons">
      <ul class="flex items-center list-rigth-icons">
        <li class="icon-hover">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon  h-3" viewBox="0 0 512 512"><path fill="white" d="M256 63.6L0 319.6l69.8 69.8L256 203.2l186.2 186.2l69.8-69.8z"/></svg>
        </li>
        <li class="icon-hover">
          <img src="/img/volume.png" class="icon" alt="Windows Volume icon">
        </li>
        <li class="icon-hover">
          <img src="/img/wifi.png" class="icon" alt="Windows Wifi icon">
        </li>
        <li class="icon-hover">
          {{ hora }}
        </li>
        <li class="icon-hover">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon h-3" viewBox="0 0 15 15"><path fill="none" stroke="white" stroke-linecap="square" stroke-linejoin="round" d="m5.5 11.493l2 2.998l2-2.998h4a1 1 0 0 0 1-1V1.5a.999.999 0 0 0-1-.999h-12a1 1 0 0 0-1 1v8.993a1 1 0 0 0 1 1h4Z" clip-rule="evenodd"/></svg>
        </li>
      </ul>
    </div>
  </section>
</template>
<style scoped>
section {
  @apply fixed bottom-0 min-h-[50px] bg-[#0C0C0C] w-full
  z-50 grid items-center grid-cols-8
}

section{
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.container-logo-windows {
  @apply m-4
}
.logo-windows {
  @apply max-w-[20px] hover:cursor-pointer transition-all duration-300
  hover:opacity-80 hover:scale-110 
}
.logo-windows{
    color: #fff;
}

.logo-windows:hover{
    color: #009AFC;
}

.apps {
  @apply flex items-center justify-start ml-2 
}

.apps-list {
  @apply flex items-center justify-center
}

.app {
  @apply text-white text-sm font-light ml-[2px] p-4
}

.icon {
  @apply max-w-[20px] hover:cursor-pointer transition-all duration-300
  hover:opacity-80 hover:scale-110 
}

.icon-hover {
  @apply text-white text-sm font-light px-1 py-4 hover:bg-[#474747]
}

.left-icons {
  @apply flex items-center justify-start ml-2 col-span-7
}

.right-icons {
  @apply flex items-center justify-center ml-2
}
</style>