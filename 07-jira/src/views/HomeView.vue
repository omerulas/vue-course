<template>
  <FilterTask :current="current" @filterChange="changeFilter" />
  <div v-if="tasks.length" class="py-12 flex flex-col gap-y-5">
    <div v-for="(task, index) in filteredTasks" :key="index" class="px-24">
      <SingleTask :task="task" @delete="handleDelete" @complete="handleComplete" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import FilterTask from '@/components/FilterTask.vue';
import SingleTask from '@/components/SingleTask.vue';

export default {
  name: 'HomeView',
  components: {
    SingleTask,
    FilterTask
  },
  data() {
    return {
      tasks: [],
      current: 'all'
    }
  },
  mounted() {
    fetch('http://localhost:3000/tasks').then(res => res.json()).then(data => this.tasks = data).catch(err => console.log(err.message))
  },
  methods: {
    handleDelete(id) {
      this.tasks = this.tasks.filter(task => task.id !== id)
    },
    handleComplete(id) {
      let myTask = this.tasks.find((task) => task.id === id)
      myTask.complete = !myTask.complete
    },
    changeFilter(filter) {
      this.current = filter
    }
  },
  computed: {
    filteredTasks() {
      if (this.current === 'completed') {
        return this.tasks.filter(task => task.complete)
      }
      if (this.current === 'continue') {
        return this.tasks.filter(task => !task.complete)
      }
      return this.tasks
    }
  }
}
</script>
<style>
.active{
  color: black!important;
}
</style>