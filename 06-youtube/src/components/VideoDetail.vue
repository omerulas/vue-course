<template>
    <div class="w-full border border-slate-200 rounded-md p-5" v-if="video">
        <div>
            <iframe class="w-full" :src="videoURL" frameborder="0"></iframe>
        </div>
        <div class="text-slate-600">
            <h4 class="text-2xl font-semibold">{{ video.snippet.title }}</h4>
            <p>{{ video.snippet.description }}</p>
        </div>
    </div>
</template>
<script>
export default {
    props: ['video'],
    computed: {
        videoURL(){
            const {videoId} = this.video.id;
            return `https://youtube.com/embed/${videoId}`
        }
    }
}
</script>