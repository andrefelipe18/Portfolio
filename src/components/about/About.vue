<script setup lang="ts">
import { useExplorerStore } from '../../stores'
import Moveable from "vue3-moveable";
import { onMounted, ref } from "vue";

const draggable = true;
const throttleDrag = 1;
const edgeDraggable = false;
const startDragRotate = 0;
const throttleDragRotate = 0;
const aboutTarget = ref(null);

onMounted(() => {
    console.log("About mounted");
    
    const moveableOrigin = document.querySelector(".moveable-origin") as HTMLElement;
    moveableOrigin.style.display = "none";

    const moveableControlBox = document.querySelector(".moveable-control-box") as HTMLElement;
    moveableControlBox.style.border = "none";
});

const onDrag = (e: any) => {
    e.target.style.transform = e.transform;
};

</script>

<template>
    <div class="">
        <div class="explorer-window" ref="aboutTarget">
            Teste
        </div>        
        <Moveable 
        :target="aboutTarget"
        :draggable="draggable"
        :throttleDrag="throttleDrag"
        :edgeDraggable="edgeDraggable"
        :startDragRotate="startDragRotate"
        :throttleDragRotate="throttleDragRotate"
        :pinchable="false"        
        :keepRatio="false"
        :throttleResize="1"        
        @drag="onDrag"        
        />
    </div>
</template>

<style scoped>
.explorer-window{
    @apply absolute top-[16%] left-[40%] w-[450px] h-[500px] border-[1px] border-[#414141] rounded-[5px] bg-[#202020]
}

.top-bar{
    @apply flex justify-between items-center w-full bg-[#333]
}

.minimize{
    @apply w-[40px] h-[40px] text-center text-white flex items-center justify-center mr-3
    hover:bg-[#808080] transition-all duration-100 font-extrabold
}

.close{
    @apply w-[40px] h-[40px] text-center text-white flex items-center justify-center
    hover:bg-[#e81123] transition-all duration-100 font-extrabold
}

.close:selected{
    @apply bg-[#e81123]
}

.actions-buttons{
    @apply flex items-center
}
.title{
    @apply text-white font-light text-lg ml-3
}

.mid-bar{
    @apply flex items-center w-full bg-[#535353] h-[px] px-3
}
.footer{
    @apply absolute bottom-0 w-full h-[30px] bg-[#535353] p-1
}

.footer-text{
    @apply text-white font-light text-sm border-r border-gray-50 pr-2
}

/* Faz com que o content ocupe o espaço */
.content{
    @apply flex-1 overflow-y-auto  overflow-hidden
}
</style>
