<template>
    <h2>ini homepage</h2>
    <p>likes : {{ likes }}</p>
    <p>{{ store.getters['product/expensiveProducts'] }}</p>
</template>
<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';
const store = useStore();

console.log(store.getters['product/expensiveProducts']);

const likes = computed(() => {
    return store.state.post.count;
});

</script>