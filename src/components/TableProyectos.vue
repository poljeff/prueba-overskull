<template>
    <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-gray-500">
            <thead class="text-xs text-gray-700 bg-gray-50">
                <tr class="border border-gray-200">
                    <th v-for="header in headers" class="px-6 py-3" :key="header">{{ header['label'] }}</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr  v-for="(item, index) in data" class="bg-white border border-gray-200" :key="index">
                    <td v-for="header in headers" scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap" :key="header">{{ item[header.key] }}</td>
                    <td>
                        <router-link :to="{ name: 'Tareas', params: { id: item.id } }" class="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4">
                            Ver tareas
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
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