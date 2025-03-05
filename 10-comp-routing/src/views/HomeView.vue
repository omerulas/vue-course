<script setup>
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();



</script>

<template>
  <div class="bg-slate-100 p-10 space-y-5 m-5 rounded-lg">
    <h1 class="font-semibold text-3xl">ANGULAR 17</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolores veritatis aspernatur. Voluptatum
      architecto ea quas excepturi! Possimus, in excepturi, saepe fugit hic recusandae quis quam, qui voluptatum quae
      reprehenderit!</p>
    <button @click="router.push('/yazilarim/1')" class="px-3 py-2 text-white bg-sky-600 rounded-md">Devamını Oku</button>
  </div>
  <div class="grid md:grid-cols-2 gap-5 m-5">
    <div class="bg-gray-900 text-white p-10 space-y-5 rounded-lg">
      <h2 class="font-semibold text-2xl">React Router</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat odio molestias quibusdam sit animi quam
        delectus repellat, eum non eligendi porro! Perferendis fuga necessitatibus, sed nemo animi numquam porro nisi!
      </p>
      <button class="px-3 py-2 border rounded-md">Devamını Oku</button>
    </div>
    <div>
      <div class="p-10 space-y-5 rounded-lg bg-slate-100">
        <h2 class="font-semibold text-2xl">Vue Router</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat odio molestias quibusdam sit animi quam
          delectus repellat, eum non eligendi porro! Perferendis fuga necessitatibus, sed nemo animi numquam porro nisi!
        </p>
        <button class="px-3 py-2 border rounded-md">Devamını Oku</button>
      </div>
    </div>
  </div>
</template>
