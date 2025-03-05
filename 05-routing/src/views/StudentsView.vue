<template>
    <div>
        <h2>Öğrencilerim</h2>
        <div v-for="(student, index) in students" :key="index">
            <router-link :to="{ name: 'studentDetail', params: { id: student.id } }">
                <h2>{{ student.name }}</h2>
            </router-link>
        </div>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    data() {
        return {
            students: []
        }
    },
    mounted() {
        // fetch('http://localhost:3000/students').then(res => res.json()).then(
        //     data => {
        //         this.students = data
        //     }
        // ).catch(err => console.error(err.message))
        axios.get('http://localhost:3000/students')
        .then(response => this.students = response.data)
    }
}
</script>
<style></style>