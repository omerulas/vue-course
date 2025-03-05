<template>
    <h1>Öğrenciler</h1>
    <ul>
        <li v-for="(student, index) in students" :key="index">{{ student.name }} <span>({{ student.isPassed ? 'Geçti' :
            'Kaldı' }})</span></li>
    </ul>
</template>
<script>
export default {
    name: "StudentList",
    emits: ['tooglePassed'],
    props: {
        students: {
            /* String, number, Boolean, Array, Object, Date, Function Symbol */
            type: Object,
            required: true
        }
    },
    methods: {
        toogleIsPassed() {
            this.$emit("tooglePassed")
        }
    },
}
</script>
<style></style>