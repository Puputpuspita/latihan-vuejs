<script setup>
import HelloWorld from './components/HelloWorld.vue';
import InputName from './components/InputName.vue';
import Display from './components/Display.vue';
import Exercise from './components/Exercise.vue';
import { ref } from 'vue'


const fullName = ref('');
const fetchData = (event) => {
  fullName.value = event;
}

const message = ref('Selamat datang');

//  <InputName @input="fullName = $event"/>
</script>

<template>
  <InputName @displayData="fetchData($event)"/>

  <!-- <div v-if="fullName.length > 1">
    <p>Halo nama saya : {{ fullName }}</p>
  </div>
  <div v-else>
    <p>Silahkan isi nama anda</p>
  </div> -->

  <Display :fullName="fullName"/>

  <!-- <Exercise :greetingMessage="message"/> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
