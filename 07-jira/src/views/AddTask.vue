<template>
    <form @submit.prevent="handleSubmit" class="border border-slate-300 max-w-xl mx-auto p-10 bg-slate-200">
        <label class="font-semibold text-xl block">Görev Başlığı</label>
        <input class="block w-full bg-white focus:outline-none p-3 my-3" v-model="title" type="text" required>
        <hr class="border-slate-500">
        <label class="font-semibold text-xl block my-3">Görev Detayı</label>
        <textarea class="block w-full bg-white focus:outline-none p-3 my-3 resize-none" v-model="details"></textarea>
        <button
            class="my-3 w-full py-3 bg-orange-600 font-semibold text-white rounded-md active:outline active:outline-4 outline-offset-3 outline-orange-600/50 cursor-pointer">Kaydet</button>
    </form>
</template>
<script>
export default {
    data() {
        return {
            title: '',
            details: '',
            uri: `http://localhost:3000/tasks`
        }
    },
    methods: {
        handleSubmit() {
            const task = {
                id: Math.floor(Math.random() * 100000),
                title: this.title,
                details: this.details,
                completed: false
            }
            fetch(this.uri, {
                method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(task)
            }).then(() => this.$router.push('/')).catch(err => console.log(err.message))
        }
    }
}
</script>