<template>
  <NoteForm @addNewStudent="addStudent" @deleteStudent="deleteParticulStudent" :students="students" />
</template>

<script>
import NoteForm from './components/NoteForm.vue';

export default {
  name: 'App',
  components: {
    NoteForm
  },
  data() {
    return {
      students: [
        {id: 2977, fullName: 'Ömer Ulaş', note_1: 85, note_2: 81 },
        {id: 1857, fullName: 'Aleyna Nur Duvan', note_1: 90, note_2: 95 },
        {id: 6412, fullName: 'Turan Sakar', note_1: 50, note_2: 40 },
        {id: 2978, fullName: 'Ayça Özkalp', note_1: 35, note_2: 45 },
        {id: 2976, fullName: 'İlgisu Çetinkaya', note_1: 75, note_2: 85 },
        {id: 2489, fullName: 'Oktay Merey', note_1: 75, note_2: 80 }
      ]
    }
  },
  methods: {
    addStudent(data) {
      this.students.push(data)
    },
    deleteParticulStudent(id) {
      const student = this.students.find(item => item.id == id)
      this.students = this.students.filter(item => item !== student)
    }
  },
}
</script>

<style></style>
