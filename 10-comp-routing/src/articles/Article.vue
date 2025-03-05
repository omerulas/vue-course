<script setup>
import { useRoute, onBeforeRouteUpdate } from 'vue-router';
import { watch } from 'vue';

const route = useRoute()

async function loadArticle(id) {
    return id // placeholder function
}

watch(() => route.params.articleId, async (newId) => {
    await loadArticle(id)
})

onBeforeRouteUpdate((async (to, from) => {
    loadArticle(to.params.id)
}))

</script>

<template>
    <div class="flex">
        <div class="m-5 w-full bg-gray-800 p-10 text-white space-y-3 rounded-lg">
            <h1 class="text-2xl font-semibold">Lorem</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ad perspiciatis mollitia in molestiae eum
                ducimus officiis aut autem maxime quos quod eveniet obcaecati accusantium, aperiam qui, nulla itaque
                non.</p>
        </div>
    </div>
    <div class="grid grid-cols-12 px-5 gap-5">
        <div class="md:col-span-8 col-span-12 space-y-5">
            <h2 class="text-2xl font-semibold">Lorem ipsum dolor sit amet</h2>
            <hr class="border border-slate-200">
            <p class="text-gray-800">6 Mart 2025 Salı - <span class="font-medium">Ömer Ulaş</span></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad optio quam dicta labore doloribus, nesciunt
                eligendi nihil rem nostrum culpa tempora voluptates, molestiae recusandae necessitatibus ducimus quaerat
                minus sed debitis!</p>
        </div>
        <div class="md:col-span-4 col-span-12">
            <div class="p-10 bg-slate-200 rounded-lg space-y-5">
                <h4 class="font-medium text-xl">Lorem ipsum dolor sit amet</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi sint, veritatis inventore ullam alias
                    aspernatur qui rerum laboriosam excepturi quibusdam laudantium placeat praesentium officiis veniam
                    sit aliquam enim ab cum?</p>
            </div>
        </div>
    </div>
</template>