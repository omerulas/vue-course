<script setup>
import { useCounterStore } from '@/stores/counter';

const store = useCounterStore()

const update = () => {
  store.$patch({
    counter: 100,
    car: {
      brand: 'Clio',
      color: 'Mavi'
    }
  })
}

</script>

<template>
  <main>
    <h1 class="p-5 border-b border-slate-200 font-bold text-2xl">PINIA</h1>
    <div class="p-5 border-b border-slate-200">
      <p>Sayı: {{ store.getCounter }}</p>
      <div class="my-5 space-x-3">
        <button @click="store.add"
          class="border border-slate-200 text-slate-500 px-3 py-1 active:outline-4 outline-sky-600/50 cursor-pointer">+</button>
        <button @click="store.subtract"
          class="border border-slate-200 text-slate-500 px-3 py-1 active:outline-4 outline-sky-600/50 cursor-pointer">-</button>
      </div>
    </div>
    <div class="p-5 border-b border-slate-200 space-y-3">
      <p>
        {{ store.car.color }} renkli {{ store.car.brand }}
      </p>
      <button @click="update"
        class="border border-slate-200 text-slate-500 px-3 py-1 active:outline-4 outline-sky-600/50 cursor-pointer">Arabayı
        ve sayacı güncelle</button>
    </div>
    <div class="p-5 border-b border-slate-200 space-y-3">
      <button @click="store.getPosts"
        class="border border-slate-200 text-slate-500 px-3 py-1 active:outline-4 outline-sky-600/50 cursor-pointer">Yazılarım</button>
      <ul>
        <li v-for="(post, index) in store.posts" :key="index">
          {{post.id}} - {{ post.title }}
        </li>
      </ul>
    </div>
  </main>
</template>
