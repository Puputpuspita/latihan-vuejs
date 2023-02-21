<template>
    <p>Halaman login</p>
    <div>
        Username <input type="text" v-model="username" required/>
    </div>
    <div>
        Password <input type="text" v-model="password" required/>
    </div>
    <button @click="login(username, password)">Login</button>
</template>

<script setup>
import { useRouter }from 'vue-router';
import { useStore } from 'vuex';

const router = useRouter();
const store = useStore();

// store.commit("user/resetUserList");

const login = (username, password) => {
    if(username != null && password != null){
        store.commit("user/addUser", username);
        router.push({ path: '/addpost' });
    };
}
</script>