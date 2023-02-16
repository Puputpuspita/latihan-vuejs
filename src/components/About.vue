<template>
    <h2>tentang kami</h2>
    <button @click="addLike">Like</button>
</template>

<script setup>
    import { useStore } from 'vuex';
    const store = useStore();

    const addLike = () => {
        store.commit("post/increment", 1);
    }

    const addLikeAsync = () => {
        store.dispatch('post/incrementAsync', 1);
    }
</script>