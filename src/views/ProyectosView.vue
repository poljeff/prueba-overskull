<template>
    <div class="o-container pt-6">
        <div class="flex items-center justify-between mb-6">
            <h1 class="text-3xl font-bold">Proyectos</h1>
            <div>
                <router-link :to="{ name: 'Crear' }" class="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4">
                    Agregar Tarea
                </router-link>
            </div>
        </div>
        <tabla-proyectos v-if="proyectos_download" :headers="cabeceras" :data="proyectos" />
        <div v-else>
            <p>Cargando...</p>
        </div>
    </div>
</template>
<script setup>
    import { onMounted, ref } from 'vue';
    import axios from 'axios';
    import TablaProyectos from '../components/TableProyectos.vue';

    const cabeceras = ref([
        {
            key: "name",
            label: "Nombre de Proyecto",
        },
        {
            key: "description",
            label: "Descripción",
        },
        {
            key: "status",
            label: "Estado",
        },
    ]);
    const proyectos = ref([]);
    const proyectos_download = ref(false);

    const obtenerProyectos = async () => {
        try {
            const response = await axios.get('https://681507e7225ff1af162aeb7e.mockapi.io/api/v1/projects');
            proyectos.value = [...response.data];
            proyectos_download.value = true;
        } catch (error) {
            console.error('Error al obtener los proyectos:', error);
        }
    };
    onMounted(() => {
        obtenerProyectos();
        console.log('ProyectosView mounted');
        
    });
</script>
