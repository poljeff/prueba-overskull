<template>
    <div>
        <h1>Tareas</h1>
        <tabla-tareas v-if="tareas_download" :headers="cabeceras" :data="tareas" />
        <div v-else>
            <p>Cargando...</p>
        </div>
    </div>
</template>
<script setup>
    import { onMounted, ref } from 'vue';
    import axios from 'axios';
    import TablaTareas from '../components/TableTareas.vue';

    const cabeceras = ref([
        {
            key: "name",
            label: "Nombre de Tarea",
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

    const tareas = ref([]);
    const tareas_download = ref(false);

    const obtenerTareas = async () => {
        try {
            const response = await axios.get('https://681507e7225ff1af162aeb7e.mockapi.io/api/v1/tasks');

            tareas.value = [...response.data];
            tareas_download.value = true;
        } catch (error) {
            console.error('Error al obtener los proyectos:', error);
        }
    };

    onMounted(() => {
        obtenerTareas();
    });
</script>
