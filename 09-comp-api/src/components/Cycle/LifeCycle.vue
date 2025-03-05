<script setup>

import { onMounted, onBeforeMount, onBeforeUpdate, onUpdated } from 'vue';
import { ref } from 'vue';

const name = ref('Ömer')

onBeforeMount(() => {
    console.log('onBeforeMount')
})

onMounted(() => {
    console.log('onMounted')

})

onBeforeUpdate(() => {
    console.log('onBeforeUpdate')

})

onUpdated(() => {
    console.log('onUpdated')

})

</script>

<template>
    {{ name }}
    <button class="btn btn-primary" @click="name = 'Faruk'">Değiştir</button>
</template>