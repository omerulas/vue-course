<script setup>

</script>

<template>
    <div class="container flex justify-between items-center py-5 px-10 border-b border-slate-200 mx-auto">
        <h1 class="text-2xl text-gray-700" to="/">Ömer Ulaş</h1>
        <div class="flex justify-start items-center gap-x-5">
            <router-link to="/" class="px-3 py-2 text-sky-600 rounded-md">Anasayfa</router-link>
            <router-link class="px-3 py-2 text-sky-600 rounded-md" to="/yazilarim">Yazılarım</router-link>
            <router-link class="px-3 py-2 text-sky-600 rounded-md" to="/iletisim">İletişim</router-link>
        </div>
    </div>
</template>