<template>
  <div class="flexbox">
    <div @click="selectBox(1)" :class="['box', boxOneSelect]"></div>
    <div @click="selectBox(2)" :class="['box', { selected: secondBox }]"></div>
    <div @click="selectBox(3)" class="box" :class="{ selected: thirdBox }"></div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  },
  data() {
    return {
      firstBox: false,
      secondBox: false,
      thirdBox: false
    }
  },
  watch: {},
  computed: {
    boxOneSelect() {
      return { selected: this.firstBox }
    }
  },
  methods: {
    selectBox(val) {
      if (val == 1) {
        this.firstBox = !this.firstBox
      } else if (val == 2) {
        this.secondBox = !this.secondBox
      } else if (val == 3) {
        this.thirdBox = !this.thirdBox
      }
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
  margin-top: 60px;
}

.flexbox {
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
  align-items: center;
}

.box {
  width: 64px;
  height: 64px;
  border-width: 4px;
  border-style: dashed;
}

.selected {
  border-color: chocolate;
}
</style>
