<script setup lang="ts">
import Moveable from "vue3-moveable";
import { onMounted, ref } from "vue";
import { useRouter } from 'vue-router'

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    target: {
        type: String,
        required: true
    }
})


const draggable = true;
const throttleDrag = 1;
const edgeDraggable = false;
const startDragRotate = 0;
const throttleDragRotate = 0;
const router = useRouter();

const refTarget = ref(null);

onMounted(() => {
    
    const moveableOrigin = document.querySelectorAll(".moveable-origin") as NodeListOf<HTMLElement>;
    moveableOrigin.forEach((element) => {
        element.style.display = "none";
    });

    const moveableLine = document.querySelectorAll(".moveable-line.moveable-direction") as NodeListOf<HTMLElement>;
    moveableLine.forEach((element) => {
        element.style.display = "none";
    });
});

const onDrag = (e: any) => {
    e.target.style.transform = e.transform;    
    e.target.style.zIndex = "9999";    
};

const closeWindow = () => {    
    router.push({ path: '/' });
};



</script>
<template>
  <div class="">
        <div class="notepad-window" ref="refTarget">
            <div class="flex justify-between items-center bg-white">        
                <div class="flex pt-0.5 pl-2 items-center ">
                <img src="/notepad-icon.webp" alt="notepad icon" class="h-4 noselect">
                <p class="font-light text-gray-800 ml-1 noselect">{{ title }} - Notepad</p>                
                </div>

                <div class="actions-buttons">
                    <div class="minimize">-</div>
                    <div class="close" @click="closeWindow">X</div>
                </div> 
            </div>
            <div class="flex bg-white pl-1 font-light text-sm text-gray-400">
                <p class="text-lw noselect"><span class="underline">A</span>rquivo</p>
                <p class="text-lw ml-2 noselect"><span class="underline">E</span>ditar</p>
                <p class="text-lw ml-2 noselect"><span class="underline">F</span>ormatar</p>
                <p class="text-lw ml-2 noselect"><span class="underline">E</span>xibir</p>
                <p class="text-lw ml-2 noselect"><span class="underline">A</span>juda</p>
            </div>
            <hr class="bg-[#f0f0f0]">
            <div class="notepad-text">
                <slot></slot>
            </div>
        </div>        
        <Moveable 
        :target="refTarget"
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
.notepad-window{
@apply absolute top-[16%] left-[40%] w-[450px] h-[500px]
}
.minimize{
    @apply w-[40px] h-[40px] text-center text-gray-800 flex items-center justify-center mr-3
    hover:bg-[#d8d8d8] transition-all duration-100 font-medium
}

.close{
    @apply w-[40px] h-[40px] text-center text-gray-800 flex items-center justify-center
    hover:bg-[#e81123] transition-all duration-100 font-medium hover:text-white
}
.close:selected{
    @apply bg-[#e81123]
}

.actions-buttons{
    @apply flex items-center
}

.notepad-text{
    padding: 0.8rem;
    background-color: #fff;
    height: 100%; 
    overflow-y: scroll;
    overflow-x: hidden;
}

.text-lw{
    @apply hover:bg-blue-100 transition-all duration-100 hover:border hover:border-blue-400
}

.notepad-text::-webkit-scrollbar {
    background-color: rgb(229 231 235);
}

.notepad-text::-webkit-scrollbar {
    background-color: rgb(229 231 235);
}

.notepad-text::-webkit-scrollbar-thumb {
    background-color: rgb(179 179 179);    
}

.notepad-text::-webkit-scrollbar-thumb:hover {
    background-color: rgb(128 128 128);
}

.notepad-text::-webkit-scrollbar-thumb:active {
    background-color: rgb(128 128 128);
}

.notepad-text::-webkit-scrollbar-button {
    background-color: #dadada;    
}

.notepad-text::-webkit-scrollbar-button:active {
    background-color: #606060;
}

.noselect{
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;        
    user-select: none;
    cursor: default !important;
}
</style>