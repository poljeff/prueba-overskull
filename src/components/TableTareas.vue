<template>
    <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-gray-500">
            <thead class="text-xs text-gray-700 bg-gray-50">
                <tr class="border border-gray-200">
                    <th v-for="header in headers"  class="px-6 py-3" :key="header">{{ header['label'] }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in data" class="bg-white border border-gray-200" :key="index">
                    <td v-for="header in headers" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap" :key="header">{{ item[header.key] }}</td>
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