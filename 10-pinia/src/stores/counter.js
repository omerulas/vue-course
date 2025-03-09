import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    // Options APIdeki data propertysi gibi
    counter: 100,
    car: {
      brand: 'Toyota',
      color: 'Kırmızı'
    },
    posts: []
  }),
  getters: {
    getCounter(){
      return this.counter
    }
  },
  actions: {
    add(){
      this.counter++;
    },
    subtract(){
      this.counter--;
    },
    async getPosts(){
      await fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        console.log(json)
        this.posts = json
      })
    }
  }
})
