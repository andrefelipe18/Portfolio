<script setup lang="ts">
import { useExplorerStore } from '../../stores'
import Moveable from "vue3-moveable";
import { onMounted, ref } from "vue";

const draggable = true;
const throttleDrag = 1;
const edgeDraggable = false;
const startDragRotate = 0;
const throttleDragRotate = 0;
const targetRef = ref(null);

onMounted(() => {
    console.log("ExplorerWindow mounted");
    
    const moveableOrigin = document.querySelector(".moveable-origin") as HTMLElement;
    moveableOrigin.style.display = "none";

    const moveableControlBox = document.querySelector(".moveable-control-box") as HTMLElement;
    moveableControlBox.style.border = "none";
});

const onDrag = (e: any) => {
    e.target.style.transform = e.transform;
};

const closeWindow = () => {    
    const explorerStore = useExplorerStore()
    explorerStore.setExplorerOpen(false)
}

const minimzeWindow = () => {
    const explorerStore = useExplorerStore()
    explorerStore.setExplorerOpen(false)
}
</script>

<template>
    <div class="">
        <div class="explorer-window" ref="targetRef">
            <div class="top-bar">
                <div class="title">Explorer</div>
                <div class="actions-buttons">
                    <div class="minimize" @click="minimzeWindow">-</div>
                    <div class="close" @click="closeWindow">X</div>
                </div>
            </div>
            <div class="mid-bar">
                <span>Arquivo</span>
                <span class="ml-2">Editar</span>
            </div>            
            <div class="content">
                <ExplorerWindowContent></ExplorerWindowContent>
            </div>
            <div class="footer">
                <span class="footer-text">4 itens</span>
            </div>
        </div>        
        <Moveable 
        :target="targetRef"
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
    @apply absolute top-[10%] left-[10%] w-[400px] h-[211px] border-[1px] border-[#414141] rounded-[5px] bg-[#202020]
}

.explorer-window{
    -webkit-touch-callout: none;  /* iPhone OS, Safari */
    -webkit-user-select: none;    /* Chrome, Safari 3 */
    -khtml-user-select: none;     /* Safari 2 */
    -moz-user-select: none;       /* Firefox */
    -ms-user-select: none;        /* IE10+ */
    user-select: none; 
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

.content{
    @apply flex-1 overflow-y-auto  overflow-hidden
}
</style>
