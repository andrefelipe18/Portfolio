<script setup lang="ts">
import Moveable from "vue3-moveable";
import { onMounted, } from "vue";
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
const targetMoveable = props.target + "Target";
const router = useRouter();
console.log(targetMoveable);

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
                <img src="/notepad-icon.webp" alt="notepad icon" class="h-4">
                <p class="font-light text-gray-800 ml-1 ">{{ title }} - Notepad</p>                
                </div>

                <div class="actions-buttons">
                    <div class="minimize">-</div>
                    <div class="close" @click="closeWindow">X</div>
                </div> 
            </div>
            <div class="flex bg-white pl-1 font-light text-xs">
                <p class=""><span class="underline">A</span>rquivo</p>
                <p class="ml-2"><span class="underline">E</span>ditar</p>
                <p class="ml-2"><span class="underline">F</span>ormatar</p>
                <p class="ml-2"><span class="underline">E</span>xibir</p>
                <p class="ml-2"><span class="underline">A</span>juda</p>
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
    hover:bg-[#d8d8d8] transition-all duration-100 font-light
}

.close{
    @apply w-[40px] h-[40px] text-center text-gray-800 flex items-center justify-center
    hover:bg-[#e81123] transition-all duration-100 font-light
}
.close:selected{
    @apply bg-[#e81123]
}

.actions-buttons{
    @apply flex items-center
}

.notepad-text{
    padding: 0.5rem;
    background-color: #fff;
    height: 100%; 
    overflow-y: scroll;
    overflow-x: hidden;
}

/* Personaliza o scroll para ficar igual o notepad do windows */
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
    background-color: rgb(179 179 179);
}
</style>