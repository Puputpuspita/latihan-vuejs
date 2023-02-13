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
  <div class="card">
    <div>     
      <label for="firstName">Nama Depan : </label>
      <!-- <input v-model="firstName" @input="loadData"/> -->
      
      <input v-model="firstName"/>

    </div>
    <div>
      <label for="lastName">Nama Belakang : </label>
      <!-- <input v-model="lastName" @input="loadData"/> -->

      <input v-model="lastName"/>

    </div>
      <div v-if="fullName.length > 1">
            <p>Halo nama saya : {{ fullName }}</p>
        </div>
        <div v-else>
            <p>Silahkan isi nama anda</p>
        </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
