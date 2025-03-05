<script setup>
import { inject } from 'vue';

const {students, updateStudent} = inject('students')

</script>

<template>
    <div>Öğrenci Listesi</div>
    
    <button @click="updateStudent">Güncelle</button>
</template>