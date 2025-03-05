<script setup>
import StudentList from './StudentList.vue';


const props = defineProps({
    students: {
        type: Array,
        require: true,
        default: []
    }
})

</script>

<template>
    <div>Öğrenciler</div>
    <StudentList />
</template>