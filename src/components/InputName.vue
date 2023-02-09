<script setup>
    import { ref, computed } from 'vue'
 
    const firstName = ref('');
    const lastName = ref('');
    const fullName = computed(() => {
        return `${firstName.value} ${lastName.value}`;
    });
    const emit = defineEmits('displayData');
    const loadData = () => {
      emit('displayData', fullName.value);
    }

    //<input v-model="firstName" @input="emit('displayData', fullName)"/>
</script>

<template>
  <div>
    <div>     
      <label for="firstName">Nama Depan : </label>
      <input v-model="firstName" @input="loadData"/>
    </div>
    <div>
      <label for="lastName">Nama Belakang : </label>
      <input v-model="lastName" @input="loadData"/>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
