<template>
    <div class="bg-slate-200 p-5 rounded-md border-l-6" :class="getStatusBar">
        <div class="flex justify-between items-center">
            <h3 @click="toggleDetail()" class="font-bold text-2xl cursor-pointer hover:underline">{{ task.title }}</h3>
            <div class="flex gap-x-1 justify-end items-center">
                <button @click="toggleComplete()" class="material-icons text-slate-500 hover:text-slate-800"> check
                </button>
                <button @click="deleteTask()" class="material-icons text-slate-500 hover:text-slate-800"> delete
                </button>
                <router-link :to="{name: 'editTask', params: {id: this.task.id}}"><button class="material-icons text-slate-500 hover:text-slate-800"> edit </button></router-link>
            </div>
        </div>
        <div v-if="showDetails">
            <p>{{ task.details }}</p>
        </div>
    </div>
</template>
<script>

export default {
    name: 'SingleTask',
    props: ['task'],
    emits: ['delete', 'complete'],
    data() {
        return {
            showDetails: false,
            uri: `http://localhost:3000/tasks/${this.task.id}`
        }
    },
    methods: {
        toggleDetail() {
            this.showDetails = !this.showDetails
        },
        deleteTask() {
            console.log("DELETE ME!")
            fetch(this.uri, { method: 'DELETE' }).then(() => this.$emit('delete', this.task.id)).catch(err => console.log(err.message))
        },
        toggleComplete() {
            fetch(this.uri, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({
                title: this.task.title, details: this.task.details, complete: !this.task.complete
            })}).then(() => this.$emit('complete', this.task.id)).catch(err => console.log(err.message))
        }
    },
    computed: {
        getStatusBar(){
            const getBorder = this.task.complete ? 'border-green-600' : 'border-red-600'
            return getBorder
        }
    }
}
</script>