<template>
    <h2>Welcome to my blog</h2>
    
    <div>
        <RouterLink
        to="/addpost"
        custom
        v-slot="{ navigate }"
        >
        <button @click="navigate" role="link">
            Add Post
        </button>
        </RouterLink>
    </div>
        <div class="card" v-for="(post, index) of getPosts" :key="index">
            <div class="container">
                <p>{{ formatDate(post.date) }}</p>
                <p>{{ post.username }}</p>
                <p>{{ post.detail }}</p>
            </div>
        </div>
</template>
<script setup>
import { useStore } from 'vuex';
const store = useStore();
const getPosts = store.getters["post/getPosts"]; 

const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('default', {dateStyle: 'long'}).format(date);
};

</script>

<style scoped>
.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    margin: 20px;
}

.container {
    padding: 2px 16px;
}
</style>