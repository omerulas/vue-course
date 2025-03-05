<script setup>
import axios from 'axios'
import { onMounted, reactive } from 'vue';

const data = reactive({
    articles: []
})

onMounted(() => {
    axios.get('http://localhost:3000/articles').then(
        response => data.articles = response.data
    ).catch(err => console.log(err))
})


</script>

<template>
    <div class="grid grid-cols-12 px-10 gap-5 my-5">
        <div v-for="(article, index) in data.articles" :key="index" class="col-span-6 border border-slate-200 p-5 space-y-5">
            <img :src="article.img + '?' + article.id" class="w-full h-64 object-cover">
            <p class="">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet minus earum cum minima nam sapiente excepturi aperiam ipsum commodi ea? Placeat!
            </p>
            <button class="mb-5 w-full py-2 text-white bg-sky-600 rounded-md">
                Devamını Oku
            </button>
        </div>
    </div>
</template>