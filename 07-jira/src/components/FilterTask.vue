<template>
    <nav class="px-24 flex justify-start items-center gap-x-5">
        <button
            class="bg-yellow-600 active:outline active:outline-4 outline-yellow-600/50 outline-offset-2 px-3 py-2 rounded-md font-semibold text-white"
            @click="updateFilter('all')" :class="{ active: current == 'all' }">Hepsi</button>
        <button
            class="bg-yellow-600 active:outline active:outline-4 outline-yellow-600/50 outline-offset-2 px-3 py-2 rounded-md font-semibold text-white"
            @click="updateFilter('completed')" :class="{ active: current == 'completed' }">Tamamlandı</button>
        <button
            class="bg-yellow-600 active:outline active:outline-4 outline-yellow-600/50 outline-offset-2 px-3 py-2 rounded-md font-semibold text-white"
            @click="updateFilter('continue')" :class="{ active: current == 'continue' }">Devam Eden</button>
    </nav>
</template>
<script>
export default {
    emits: ['filterChange'],
    props: ['current'],
    methods: {
        updateFilter(filter) {
            this.$emit('filterChange', filter)
        }
    }
}
</script>