<template>
  <Students :students="students" @tooglePassed="toggleStudentStatus" />
</template>

<script>
import Students from './components/Students.vue';

export default {
  name: 'App',
  components: {
    Students
  },
  data() {
    return {
      students: [
        { id: "1", name: 'Ömer Ulaş', phone: '123 456 78 91', mail:"omer.ulas@mail.com", isPassed: true },
        { id: "2", name: 'Kübra Ulaş', phone: '123 456 78 91', mail:"kubra.ulas@mail.com" , isPassed: false },
        { id: "3", name: 'Faruk Ulaş', phone: '123 456 78 91', mail:"faruk.ulas@mail.com", isPassed: false  },
        { id: "4", name: 'Elif Ulaş', phone: '123 456 78 91', mail:"elif.ulas@mail.com", isPassed: true  }
      ]
    }
  },
  methods: {
    toggleStudentStatus(){
      console.log(this.students)
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
