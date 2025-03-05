<template>
    <li @click="onVideoSelect"
        class="flex justify-start items-center gap-x-5 p-5 border border-slate-200 rounded-lg hover:underline cursor-pointer">
        <img width="50%" :src="imageUrl">
        <div class="font-semibold md:text-lg text-base">
            {{ video.snippet.title }}
        </div>
    </li>
</template>
<script>
export default {
    props: ['video'],
    emits: ['videoSelect'],
    computed: {
        imageUrl() {
            return this.video.snippet.thumbnails.medium.url
        }
    },
    methods: {
        onVideoSelect() {
        }
    }
}
</script>
<style></style>