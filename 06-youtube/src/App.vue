<template>
  <h2 class="text-center text-2xl text-gray-700 font-semibold py-5">Youtube Uygulaması</h2>
  <SearchBar @termChange="onTermChange" />
  <div class="max-w-7xl mx-auto px-24 flex justify-start items-start gap-x-5 my-5">
    <VideoDetail :video="selectedVideo" />
    <VideoList @videoSelect="onVideoSelect" :videos="videos" />
  </div>
</template>

<script>
import axios from 'axios';
import SearchBar from './components/SearchBar.vue';
import VideoList from './components/VideoList.vue';
import VideoDetail from './components/VideoDetail.vue';

export default {
  name: 'App',
  components: {
    SearchBar,
    VideoList,
    VideoDetail
  },
  data() {
    return {
      videos: [],
      selectedVideo: null
    }
  },
  methods: {
    onTermChange(searchTerm) {
      axios.get(
        // AIzaSyDzOAKjFHqE85O1h29QWV9wSoYULgvNKsI
        'https://www.googleapis.com/youtube/v3/search', {
        params: {
          part: 'snippet',
          type: 'video',
          key: 'AIzaSyDzOAKjFHqE85O1h29QWV9wSoYULgvNKsI',
          q: searchTerm
        }
      }
      ).then(response => console.log(this.videos = response.data.items))
    },
    onVideoSelect(video) {
      this.selectedVideo = video
    }
  },
}
</script>
