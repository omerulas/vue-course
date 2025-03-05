<template>
  <nav>
    <router-link to="/">Ana Sayfa</router-link> |
    <router-link to="/about">Hakkımızda</router-link> |
    <router-link :to="{ name: 'students' }">Öğrencilerim</router-link> |
    <router-link to="/students/1">1. Nolu Öğrenci</router-link>
  </nav>
  <div>
    <button @click="mainPage()">Anasayfa</button>
    <button @click="back()">Geri</button>
    <button @click="next()">İleri</button>
  </div>
  <router-view />
</template>
<script>
export default {
  methods: {
    mainPage(){
      this.$router.push('/')
    },
    back(){
      
      this.$router.go('-1')
    },
    next(){

      this.$router.go('1')
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
button {
  margin: 0px 20px 20px;
  padding: 10px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
}
/* button:hover:{} */
</style>
