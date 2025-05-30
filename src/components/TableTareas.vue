<template>
    <table class="realative overflow-x text-red-400">
        <thead>
            <tr>
                <th v-for="header in headers" :key="header">{{ header['label'] }}</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in data" :key="index">
                <td v-for="header in headers" :key="header">{{ item[header.key] }}</td>
                <td>
                    <router-link :to="{ name: 'Tareas', params: { id: item.id } }">
                        Ver tareas
                    </router-link>
                </td>
            </tr>
        </tbody>
    </table>
</template>
<script setup>
defineProps({
    headers: {
        type: Array,
        required: true
    },
    data: {
        type: Array,
        required: true
    }
});
</script>