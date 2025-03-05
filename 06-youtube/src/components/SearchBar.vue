<template>
    <form @submit.prevent="handleSubmit" class="max-w-7xl mx-auto px-24 flex gap-x-5">
        <input class="border border-slate-200 w-full p-3 rounded-md" type="text" v-model="searchTerm" />
        <button class="py-3 bg-gray-300 px-12 bg-green-700 font-semibold text-white rounded-md active:outline active:outline-3 outline-green-700 outline-offset-3">Ara</button>
    </form>
</template>
<script>
export default {
    emits: ['termChange'],
    data() {
        return {
            searchTerm: ''
        }
    },
    methods: {
        handleSubmit(){
            this.$emit("termChange", this.searchTerm)
        }
    }
}
</script>