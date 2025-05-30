<template>
    <div>
        <h1>Proyectos</h1>
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
