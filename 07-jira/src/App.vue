<template>
  <nav class="text-center my-5">
    <router-link class="text-xl inline-block font-medium text-gray-700 px-5 ms-4 py-1" to="/">Yapılacaklar Listesi</router-link> |
    <router-link class="text-xl inline-block font-medium text-gray-700 px-5 ms-4 py-1" to="/add-task">Yeni Görev Ekle</router-link>
  </nav>
  <router-view />
</template>
<style>
.material-symbols-outlined {
  font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24
}
.material-icons {
  font-size: 20px;
  margin-left: 12px;
  cursor: pointer;
}
.router-link-active{
  border-bottom: 1px solid green;
}
</style>