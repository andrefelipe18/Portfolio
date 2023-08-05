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
  <section class="workspace" id="workspace">
    <Explorer></Explorer>
    <MensagemAtivacao></MensagemAtivacao>
    <RouterView />
  </section>
</template>
<style scoped>

</style>