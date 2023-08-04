<template>
    <div>
        <h1 class="font-bold text-gray-800 text-lg mt-2">Iniciações Científicas</h1>
        <ul class="mt-2">
            <li>
                <p class="title">Título do projeto:</p>
                <p class="project">Smart Home Control: Desenvolvimento do back-end de um sistema web com AdonisJS e MySQL para gerenciamento e integração de dispositivos inteligentes.</p>
                <p class="second-title">Orientador:</p>
                <p class="project">Prof. Dr. Alciano Gustavo Genovez de Oliveira</p>
                <p class="second-title">Data de início:</p>
                <p class="project">07/2023</p>
                <p class="second-title">Data de término:</p>
                <p class="project">Previsto para 12/2023</p>
            </li>
            <li class="mt-2">
                <p class="title">Título do projeto:</p>
                <p class="project">Desenvolvimento de um ambiente virtual em um site web para o auxílio do desenvolvimento da visão espacial.</p>
                <p class="second-title">Orientador:</p>
                <p class="project">Prof. Me. Adriano Bezerra</p>
                <p class="second-title">Data de início:</p>
                <p class="project">04/2022</p>
                <p class="second-title">Data de término:</p>
                <p class="project">12/2022</p>
            </li>
       </ul>
    </div>
</template>
<style scoped>
.title{
    @apply font-semibold text-base mt-1 text-gray-700
}

.title{
    font-size: 1.15rem !important;
}

.second-title{
    @apply font-medium text-base mt-1 text-gray-700
}

.project{
    @apply font-light text-sm text-gray-700 mt-1
}


</style>