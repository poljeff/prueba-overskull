<template>
    <div class="o-container pt-6">
        <div class="flex gap-2 items-center mb-6">
            <div>
                <router-link to="/" class="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4">
                    < 
                </router-link>
            </div>
            <h1 class="text-3xl font-bold">Tarea del proyecto {{ route.params.id }}</h1>
        </div>
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
    import { useRoute } from 'vue-router'

    const route = useRoute()

    const cabeceras = ref([
        {
            key: "title",
            label: "Nombre de Tarea",
        },
        {
            key: "description",
            label: "Descripción",
        },
        {
            key: "due_date",
            label: "Fecha de Vencimiento",
        },
        {
            key: "priority",
            label: "Prioridad",
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
