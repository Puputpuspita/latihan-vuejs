<script setup>
import { ref } from 'vue';

// defineProps({
//   greetingMessage: String,
// })

const id = ref(1);
const url = ref('https://youtube.com');
const isButtonDisabled = ref(true);
const imgUrl = ref('https://neilpatel.com/wp-content/uploads/2019/08/google.jpg');
const isActive = ref(false);
const color = ref('yellow');
const judul = ref('Judul dari page ini');
const inputWidth = ref(60);
const inputHeight = ref(40);
</script>

<template>
  <div class="card">
    <div :id="`list-${id}`"></div>
    <button :disabled="isButtonDisabled">Button</button>
    <a :href="url"> link youtube</a>
    <div>
        <span :title="judul">
            Exercise Section
        </span>
    </div>
    <div :style="{ backgroundColor: color}">
        <input v-model="color" type="text"/>
    </div>

    <div :class="{ active: isActive}">
        <input v-model="isActive" type="checkbox"/>
        yellow background
    </div>
    <div>
        <label for="width">Width </label>
        <input v-model="inputWidth"/>
        <label for="height">height </label>
        <input v-model="inputHeight"/>
    </div>
    <img :src="imgUrl" :width="inputWidth" :height="inputHeight"/>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}

.active {
  background-color: yellow;
}
</style>