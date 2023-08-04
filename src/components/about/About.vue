<script setup lang="ts">
import Moveable from "vue3-moveable";
import { onMounted, ref } from "vue";
import { useRouter } from 'vue-router'

const draggable = true;
const throttleDrag = 1;
const edgeDraggable = false;
const startDragRotate = 0;
const throttleDragRotate = 0;
const aboutTarget = ref(null);
const router = useRouter();

onMounted(() => {
    console.log("About mounted");
    
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
        <div class="about-window" ref="aboutTarget">
            <div class="flex justify-between items-center bg-white">        
                <div class="flex pt-0.5 pl-2 items-center ">
                <img src="/notepad-icon.webp" alt="notepad icon" class="h-4">
                <p class="font-light text-gray-800 ml-1 ">About - Notepad</p>                
                </div>

                <div class="actions-buttons">
                    <div class="minimize" @click="minimzeWindow">-</div>
                    <div class="close" @click="closeWindow">X</div>
                </div> 
            </div>
            <div class="flex bg-white pl-1 font-light text-xs">
                <p class=""><span class="underline">A</span>rquivo</p>
                <p class="ml-1"><span class="underline">E</span>ditar</p>
                <p class="ml-1"><span class="underline">F</span>ormatar</p>
                <p class="ml-1"><span class="underline">E</span>xibir</p>
                <p class="ml-1"><span class="underline">A</span>juda</p>
            </div>
            <hr class="bg-[#f0f0f0]">
            <div class="notepad-text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ad, numquam asperiores enim odio eos harum non officia impedit suscipit est dignissimos beatae nulla quod. Iure rem, odio saepe asperiores nulla ut. Impedit qui ipsam rem ab quam dolores, non dignissimos ipsa debitis hic reprehenderit tempore pariatur atque adipisci corporis est temporibus consequatur explicabo fuga fugiat culpa minus architecto unde eligendi. Magni debitis voluptatem omnis. Doloremque, soluta culpa non delectus, officiis libero harum ab voluptates eaque incidunt ea unde voluptas, quisquam dicta numquam recusandae velit laborum eius pariatur earum. Delectus nemo ullam saepe eaque veniam similique quasi, doloremque hic fugit sunt deleniti a cumque qui. Nesciunt officia animi eligendi id maxime ab. Suscipit iusto iste eius culpa alias possimus assumenda dolores eos est praesentium veritatis commodi porro necessitatibus sint illum fugit quam consequatur, obcaecati odio iure dolorum sed debitis! Itaque libero voluptatibus officiis quia quos dolor. Repellat aut numquam quas odit quidem dolore officiis quo omnis explicabo eveniet, minus fugiat aliquid magnam temporibus non, ea cum ipsam possimus. Magni, temporibus consequatur. Debitis earum corporis autem corrupti doloremque consectetur magni sit cumque eos atque voluptatem nihil modi ipsa unde, quidem velit explicabo error quasi, officia quia? Ipsum, reprehenderit officiis laboriosam, quos recusandae impedit enim odio aliquam corporis fuga, beatae molestias assumenda fugit? Ex quasi ipsam tenetur suscipit dolorem totam rem vero, delectus eos cumque minus, minima enim perferendis amet repudiandae omnis quod dolore. Rem placeat sit eaque facilis voluptates dolor ad neque. Magnam excepturi reprehenderit fugit quam ullam dolorum laudantium nisi impedit labore assumenda quos incidunt, debitis aspernatur aut temporibus dolores, distinctio saepe unde, vitae laboriosam perferendis quasi minus. Alias facilis aliquid dolorem blanditiis officia quaerat ducimus dolorum quae perspiciatis? Totam adipisci temporibus saepe labore deleniti ratione voluptatem esse enim aperiam optio, dicta quo dolorum iusto velit in quod fugit perferendis earum. Omnis, error? Non aliquid expedita deserunt, temporibus ipsum id ut ea sed voluptate sunt neque modi, quod omnis iste? Explicabo atque quidem tenetur deserunt voluptates nam aliquid minima saepe accusamus excepturi officiis nihil error corporis asperiores eveniet modi qui at a sequi quasi consequuntur distinctio optio, ratione laborum? Temporibus quidem doloribus culpa corporis amet, quia exercitationem laboriosam iusto aliquid excepturi suscipit veniam, error facilis odit, aperiam quis distinctio? Delectus quasi, obcaecati accusamus itaque quos amet, ipsam asperiores eligendi corrupti iusto corporis. Amet nam consequuntur corporis laborum omnis? Consectetur dicta odio reiciendis animi perspiciatis, quas fuga laboriosam fugit laudantium minus? Iusto vitae odio doloribus! Quaerat quo libero ab voluptate quia culpa explicabo? Neque harum reiciendis minima quibusdam autem veniam delectus sed! Quaerat sapiente sint ipsa recusandae iure voluptas debitis deserunt exercitationem nulla excepturi! Quas velit inventore ratione id numquam. Debitis nostrum reiciendis voluptatem rerum velit obcaecati architecto, aspernatur totam labore cum quas et autem facere nemo, voluptatibus dolore expedita atque quod qui distinctio eos, excepturi officia reprehenderit modi. Asperiores accusantium rem modi eos, ducimus neque nobis temporibus dolorum beatae libero nesciunt dolorem? Vero eum delectus soluta. Et exercitationem a perferendis veniam, voluptatem sit blanditiis incidunt, consequuntur reprehenderit necessitatibus eum dolorum ducimus. Consequatur, et eius. Dolore aspernatur corrupti aliquam atque mollitia non, pariatur autem beatae quo officiis assumenda praesentium molestias! Deserunt ea veniam labore illum dolor saepe nostrum, odit suscipit itaque quis, fugit, dignissimos nesciunt quos ab. Ratione asperiores sunt explicabo. Aliquid, magnam cumque voluptate a atque numquam iste consequatur sequi, nihil officiis officia eligendi qui aspernatur dignissimos sit quisquam. Repudiandae voluptatibus inventore dolore adipisci iusto, asperiores possimus, omnis eaque, quia eligendi illum quas tempora aliquid laudantium atque dicta distinctio eos beatae ea nihil magnam. Omnis exercitationem possimus, officiis laudantium cumque laboriosam laborum autem enim error provident, fuga, dolore eos maxime cupiditate nobis? Ad adipisci laudantium ex in quod nobis quaerat quis sapiente aspernatur sed? Veniam, neque illum dolores ea, corporis quae nisi exercitationem consequatur facere aliquid nulla nostrum. Itaque incidunt, eveniet harum facere, nostrum sint fugiat in nisi, necessitatibus quisquam nam eaque iste. Deleniti minus excepturi, sed ipsum, incidunt vitae qui placeat impedit dicta aut voluptates possimus voluptatum laboriosam numquam commodi error, et totam aliquid esse animi! Distinctio accusantium dolor, rerum eaque omnis impedit repudiandae! Illo voluptatem dignissimos voluptates nesciunt quasi veniam commodi, molestias iusto voluptas incidunt. Est amet quisquam, vel magnam ducimus cumque fugit esse error repellat quas officia!</p>
            </div>
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
.about-window{
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
