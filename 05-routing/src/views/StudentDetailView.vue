<template>
    <div v-if="student">
        Öğrenci Detay
        <h3>{{ id }}-{{ student.name }}</h3>
    </div>
    <div v-else>
        Öğrenci bilgisi yükleniyor
    </div>
</template>
<script>
import axios from 'axios'

export default {
    props: ['id'],
    data() {
        return {
            student: null
        }
    },
    mounted() {
        // setTimeout(() => {
        //     fetch('http://localhost:3000/students/'+this.id).then(res => res.json()).then(
        //     data => {
        //         this.student = data
        //     }
        // ).catch(err => console.error(err.message))
        // }, 100);
        axios.get('http://localhost:3000/students/'+this.id)
        .then(response => this.student = response.data)
    }
}
</script>
<style>
    
</style>