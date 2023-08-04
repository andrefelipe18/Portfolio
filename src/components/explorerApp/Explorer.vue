<script setup lang="ts">
import { computed } from 'vue'
import { useExplorerStore } from '../../stores'

const explorerStore = useExplorerStore()
const openWindow = computed(() => explorerStore.$state.openWindow);
</script>
<template>
    <section class="">
        <ExplorerFolder></ExplorerFolder>
        <ExplorerWindow v-if="openWindow"></ExplorerWindow>
    </section>
</template>
<style scoped>

</style>