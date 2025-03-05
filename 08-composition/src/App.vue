<template>
  <div>Hello Composition API!</div>
  <div ref="myRef">Yaş: {{ obj.age }}</div>
  <div>Ad: {{ obj.name }}</div>
  <button @click="handleClick">Tıkla</button>
  <hr>
  <h2>Reactive</h2>
  <div ref="myRef">Yaş: {{ obj2.age }}</div>
  <div>Ad: {{ obj2.name }}</div>
  <button @click="handleClick2">Tıkla</button>

</template>

<script>
import { ref, reactive } from 'vue';


export default {
  name: 'App',
  /**
   * Her seyden once ilk setup metodu calisir.
   * Ardından created ve mounted metotları calisir.
   */
  setup() {
    const obj = ref({ /* Primitive tip değişkenleri kullanıldığında */
      name: 'Ömer',
      age: 25
    })
    const obj2 = reactive({ /* Non-Primitive tip değişkenleri kullanıldığında */
      name: 'Faruk',
      age: 19
    })
    // let name = ref('Ömer');
    // let age = ref(25);
    // const myRef = ref('')
    const handleClick = () => {
      // console.log(myRef)
      // console.log(myRef.value)
      // myRef.value.classList.add('text-2xl', 'font-medium')
      // myRef.value.textContent = 'Ömer Ulaş'
      // name.value = 'Faruk'
      // age.value = 18
      obj.value.name = 'Ayşe'
      obj.value.age = 48
    }
    const handleClick2 = () => {
      obj2.name = 'Mücahit'
      obj2.age = 50
    }
    return { handleClick, handleClick2, obj, obj2 }
  },
  created() { },
  mounted() { },
  data() {
    return {}
   },
}
</script>
