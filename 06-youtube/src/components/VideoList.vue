<template>
    <ul class="w-full space-y-5">
        <VideoListItem @videoSelect="onVideoSelect" v-for="video in videos" :key="video.etag" :video="video" />
    </ul>
</template>
<script>
import VideoListItem from './VideoListItem.vue';

export default {
    props: ['videos'],
    components: {
        VideoListItem
    },
    emits: ['videoSelect'],
    methods: {
        onVideoSelect(video){
            this.$emit('videoSelect', video)
        }
    }
}
</script>