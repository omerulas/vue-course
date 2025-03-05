<template>
    <form @submit.prevent="handleSubmit" class="border border-slate-300 max-w-xl mx-auto p-10 bg-slate-200">
        <label class="font-semibold text-xl block">Görev Başlığı</label>
        <input class="block w-full bg-white focus:outline-none p-3 my-3" v-model="title" type="text" required>
        <hr class="border-slate-500">
        <label class="font-semibold text-xl block my-3">Görev Detayı</label>
        <textarea class="block w-full bg-white focus:outline-none p-3 my-3 resize-none" v-model="details"></textarea>
        <button
            class="my-3 w-full py-3 bg-green-600 font-semibold text-white rounded-md active:outline active:outline-4 outline-offset-3 outline-orange-600/50 cursor-pointer">Güncelle</button>
    </form>
</template>
<script>
export default {
    props: ['id'],
    data() {
        return {
            title: '',
            details: '',
            complete: false,
            uri: `http://localhost:3000/tasks/${this.id}`
        }
    },
    methods: {
        handleSubmit() {
            const task =
                fetch(this.uri, {
                    method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({
                        title: this.title,
                        details: this.details,
                        completed: this.complete
                    })
                }).then(() => this.$router.push('/')).catch(err => console.log(err.message))
        }
    },
    mounted() {
        fetch('http://localhost:3000/tasks/' + this.id).then(res => res.json()).then(data => {
            this.title = data.title;
            this.details = data.details;
            this.complete = data.complete;
        }).catch(err => console.log(err.message))
    }
}
</script>