<script setup lang="ts">

</script>
<template>
  <section>
    <div class="container-logo-windows">
        <svg class="logo-windows" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="M6.555 1.375L0 2.237v5.45h6.555V1.375zM0 13.795l6.555.933V8.313H0v5.482zm7.278-5.4l.026 6.378L16 16V8.395H7.278zM16 0L7.33 1.244v6.414H16V0z"/></svg>
    </div>
    <div class="apps">
        
    </div>
  </section>
</template>
<style scoped>
section {
  @apply fixed bottom-0 min-h-[50px] bg-[#0C0C0C] w-full
  z-50
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
</style>
