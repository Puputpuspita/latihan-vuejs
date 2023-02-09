<script>
import { computed, ref } from 'vue'

export default {
  setup() {
    //ref is a function to create a reactive data property.
    const msg = ref('Hello World');
    const count = ref(0);

    function increment() {
      count.value++;
      //To define an event in a Vue component, you can use the emit function
      emit('increment', count.value);
    }

    const numbers = ref([1, 2, 3, 4, 5]);
    const object = ref({name: 'John', age: 30, city: 'London'});
    const showMessage = ref(false);

    const isActive = ref(false);
    const color = ref('yellow');

    const firstName = ref('');
    const lastName = ref('');
  
    const fullName = computed(() => {
      return `${firstName.value} ${lastName.value}`;
    });

    return { isActive, color, msg, count, increment, numbers, object, showMessage, firstName, lastName, fullName };
  },
};

// defineProps({
//   msg: String,
// })

// const count = ref(0)
// const message = ref('halo');
// function increment() {
//       count.value++;
//       //To define an event in a Vue component, you can use the emit function in the component's script block.
//       emit('increment', count.value);
// }
</script>

<template>
  <h1>{{ msg }}</h1>
  <input v-model="msg"/>

  <div class="card">
    <button type="button" @click="increment">count is {{ count }}</button>
  </div>

  <ul>
    <li v-for="n in numbers" :key="n">{{ n }}</li>
  </ul>

  <ul>
    <li v-for="(value, key) in object" :key="key">{{ key }}: {{ value }}</li>
  </ul>

  <div>
    <label>Show secret message</label>
    <input v-model="showMessage" type="checkbox" />
    <p v-if="showMessage">Hai!</p>
  </div>

  <div :style="{ backgroundColor: color}">
    <input v-model="color" type="text"/>
  </div>

  <div :class="{ active: isActive}">
    <input v-model="isActive" type="checkbox"/>
  </div>

  <div>
    <input v-model="firstName" type="text" />
    <input v-model="lastName" type="text" />
    <p>Full name: {{ fullName }}</p>
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
